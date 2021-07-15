import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.game || initialState;

export const selectGames = createSelector([selectSlice], state => state);
export const selectGame = createSelector(
  selectSlice,
  state => state.selectedGame,
);
