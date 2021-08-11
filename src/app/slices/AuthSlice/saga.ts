import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { call, put, takeLatest } from 'redux-saga/effects';
import { authActions as actions } from '.';
import { gameActions } from '../GameSlice';
import {
  LoginDto,
  SessionsService,
  UsersService,
  serviceOptions,
  CreateUserDto,
} from '../../services/ms-service-proxy';
import { checkAuthExpiration } from '../utils';

import { Token } from './types';
import { IUser } from '../../../types';

import { LS_TOKEN, LS_USER, API_BASE } from '../../../utils/constants';

const instance = axios.create({
  baseURL: API_BASE,
});

serviceOptions.axios = instance;

function* handleLogin({ payload }: PayloadAction<LoginDto>) {
  try {
    yield put(actions.loading(true));

    let response = yield call(SessionsService.login, { body: payload });

    if (response.success) {
      localStorage.setItem(LS_TOKEN, response.token);
      localStorage.setItem(LS_USER, JSON.stringify(response.data));
      yield put(actions.setUser(response.data));
    }
  } catch (e) {
    //TODO: is this a promise? if it is, we need to resolved or something to
    // extract the message
    yield put(actions.loading(false));
    yield put(actions.loginError(e.response.data.message));
  }
}

function* handleCheckAuth() {
  try {
    yield put(actions.loading(true));
    const token = localStorage.getItem(LS_TOKEN);
    if (token) {
      if (checkAuthExpiration(token)) {
        let userString = localStorage.getItem(LS_USER);
        //FIXME: This is awful
        let userObject = { ...JSON.parse(userString + '') } as IUser;
        yield put(actions.setUser(userObject));
      } else {
        yield put(actions.logout());
      }
    }
  } catch (e) {
    //TODO: Do something when we catch an error
    yield put(actions.loading(false));
  }
}

function* handleLogout() {
  try {
    yield put(actions.loading(true));
    localStorage.removeItem(LS_TOKEN);
    localStorage.removeItem(LS_USER);
    yield put(gameActions.resetGames());
    yield put(actions.loading(false));
  } catch (e) {
    console.log('Error Logout', e);
  }
}

function* handleRegister({ payload }: PayloadAction<CreateUserDto>) {
  try {
    yield put(actions.loading(true));

    let response = yield call(UsersService.users1, { body: payload });
    yield put(actions.loading(false));
  } catch (e) {
    //TODO: is this a promise? if it is, we need to resolved or something to
    // extract the message
    yield put(actions.loading(false));
    yield put(actions.loginError(e.response.data.message));
  }
}

export function* authSaga() {
  yield takeLatest(actions.login.type, handleLogin);
  yield takeLatest(actions.register.type, handleRegister);
  yield takeLatest(actions.checkAuth.type, handleCheckAuth);
  yield takeLatest(actions.logout.type, handleLogout);
}
