import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { gameActions as actions } from '.';
import { IGame } from '../../../types';

import { LS_TOKEN } from '../../../utils/constants';

import {
  CreateGameDto,
  UpdateGameDto,
  serviceOptions,
  GamesService,
} from '../../services/ms-service-proxy';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
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

      let response = yield call(GamesService.games, options);

      yield put(actions.setGames(response.data));
    }
  } catch (e) {
    //TODO: DO something when an error occur
    switch (e.response.data.statusCode) {
      case 404:
        yield put(actions.setGames([]));
    }
  }
}

function* addGame({ payload }: PayloadAction<CreateGameDto>) {
  try {
    let token = localStorage.getItem(LS_TOKEN);
    if (token) {
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let response = yield call(
        GamesService.games1,
        { body: payload },
        options,
      );
      console.log(response);
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

      let response = yield call(GamesService.games4, { id: payload }, options);
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

      let response = yield call(
        GamesService.games3,
        {
          id: payload.id,
          body: { ...payload } as UpdateGameDto,
        },
        options,
      );
    }
  } catch (e) {
    // TODO: Do something with the error
  }
}

export function* gameSaga() {
  yield takeLatest(actions.loadGames, loadGames);
  yield takeLatest(actions.addGame, addGame);
  yield takeLatest(actions.delete, deleteGame);
  yield takeLatest(actions.editGame, editGame);
}
