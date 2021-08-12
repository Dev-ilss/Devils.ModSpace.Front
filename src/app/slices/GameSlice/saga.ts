import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { gameActions as actions } from '.';
import { authActions } from '../AuthSlice';
import { push } from 'react-router-redux';

import { LS_TOKEN, API_BASE, DASHBOARD_LINK } from '../../../utils/constants';

import {
  UpdateGameDto,
  serviceOptions,
  GamesService,
} from '../../services/ms-service-proxy';

import { checkAuthExpiration } from '../utils/index';

const instance = axios.create({
  baseURL: API_BASE,
});

serviceOptions.axios = instance;

function* loadGames() {
  try {
    let token = localStorage.getItem(LS_TOKEN);
    if (token) {
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (checkAuthExpiration(token)) {
        let response = yield call(GamesService.games, options);
        yield put(actions.setGames(response.data));
      } else {
        yield put(authActions.logout());
      }
    }
  } catch (e) {
    //TODO: DO something when an error occur
    switch (e.response.data.statusCode) {
      case 404:
        yield put(actions.setGames([]));
    }
  }
}

function* addGame({ payload }: PayloadAction<any>) {
  try {
    let token = localStorage.getItem(LS_TOKEN);
    if (token) {
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (checkAuthExpiration(token)) {
        let response = yield call(
          GamesService.games1,
          {
            ...payload,
          },
          options,
        );
        window.location.href = DASHBOARD_LINK;
      } else {
        yield put(authActions.logout());
      }
    }
  } catch (e) {
    //TODO: Do something with the error
    console.log('ERROR creating game');
  }
}

function* deleteGame({ payload }: PayloadAction<number>) {
  try {
    let token = localStorage.getItem(LS_TOKEN);
    if (token) {
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (checkAuthExpiration(token)) {
        let response = yield call(
          GamesService.games4,
          { id: payload },
          options,
        );
        window.location.href = DASHBOARD_LINK;
      } else {
        yield put(authActions.logout());
      }
    }
  } catch (e) {
    // TODO: Do something with the error
  }
}

function* editGame({ payload }: PayloadAction<any>) {
  try {
    let token = localStorage.getItem(LS_TOKEN);
    if (token) {
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (checkAuthExpiration(token)) {
        let { id, ...rest } = payload;

        let response = yield call(
          GamesService.games3,
          {
            id: id,
            body: { ...rest } as UpdateGameDto,
          },
          options,
        );
        window.location.href = DASHBOARD_LINK;
      } else {
        yield put(authActions.logout());
      }
    }
  } catch (e) {
    // TODO: Do something with the error
  }
}

function* getGameImage({ payload }: PayloadAction<string>) {
  try {
    let token = localStorage.getItem(LS_TOKEN);
    if (token) {
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      let response = yield call(
        GamesService.picture,
        { imageId: payload },
        options,
      );

      console.log('SAGA:GAME_SAGA::Picture', response);
    }
  } catch (e) {
    // TODO: Do something with the error
    console.error('ERROR CARGANDO IMAGEN:: SAGA', e);
  }
}

export function* gameSaga() {
  yield takeLatest(actions.loadGames, loadGames);
  yield takeLatest(actions.addGame, addGame);
  yield takeLatest(actions.delete, deleteGame);
  yield takeLatest(actions.editGame, editGame);
  yield takeLatest(actions.getGameImage, getGameImage);
}
