import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../utils/@reduxjs/toolkit';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';
import { gameSaga } from './saga';
import { GameState } from './types';
import { IGame } from '../../../types';

import { UpdateGameDto } from '../../services/ms-service-proxy';

export const initialState: GameState = {
  games: [],
  error: null,
  selectedGame: null,
};

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    loadGames(state, action: PayloadAction) {},
    setGames(state, { payload }: PayloadAction<IGame[]>) {
      state.games = payload;
    },
    selectGame(state, action: PayloadAction<number>) {
      state.selectedGame = state.games?.find(
        game => game.id === action.payload,
      );
    },
    addGame(state, action: PayloadAction<any>) {},
    editGame(state, action: PayloadAction<UpdateGameDto>) {},
    delete(state, action: PayloadAction<number>) {},
    getGameImage(state, action: PayloadAction<string>) {},
    resetGames(state, action: PayloadAction) {
      state.games = [];
      state.selectedGame = null;
    },
  },
});

export const { actions: gameActions } = slice;

export const useGameSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: gameSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useGameSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
