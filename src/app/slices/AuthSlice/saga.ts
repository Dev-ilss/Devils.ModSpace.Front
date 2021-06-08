import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { call, put, takeLatest } from 'redux-saga/effects';
import { authActions as actions } from '.';
import {
  LoginDto,
  SessionsService,
  serviceOptions,
} from '../../services/ms-service-proxy';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
});

serviceOptions.axios = instance;

function* handleLogin({ payload }: PayloadAction<LoginDto>) {
  try {
    yield put(actions.loading(true));

    let response = yield call(SessionsService.login, { body: payload });

    yield put(actions.loading(false));

    if (response.success) {
      // localStorage.setItem('token', response.token);

      yield put(actions.setUser(response.data));
    }
  } catch (e) {
    yield put(actions.loginError(e.response.data.message));
  }
}

export function* authSaga() {
  yield takeLatest(actions.login.type, handleLogin);
}
