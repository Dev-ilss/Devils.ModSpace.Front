import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { call, put, takeLatest } from 'redux-saga/effects';
import { authActions as actions } from '.';
import {
  LoginDto,
  SessionsService,
  serviceOptions,
  UserEntity,
} from '../../services/ms-service-proxy';

import { LS_TOKEN, LS_USER } from '../../../utils/constants';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
});

serviceOptions.axios = instance;

function* handleLogin({ payload }: PayloadAction<LoginDto>) {
  try {
    yield put(actions.loading(true));

    let response = yield call(SessionsService.login, { body: payload });

    if (response.success) {
      localStorage.setItem(LS_TOKEN, response.token);
      localStorage.setItem(LS_USER, response.data);
      yield put(actions.setUser(response.data));
    }
  } catch (e) {
    //TODO: is this a promise? if it is, we need to resolved or something to
    // extract the message
    yield put(actions.loading(false));
    yield put(actions.loginError(e.response.data.message));
  }
}

export function* authSaga() {
  yield takeLatest(actions.login.type, handleLogin);
  // yield takeLatest(actions.checkAuth.type, handleCheckAuth);
}
