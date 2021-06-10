import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../utils/@reduxjs/toolkit';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';
import { authSaga } from './saga';
import { AuthState } from './types';
import { LoginDto, UserEntity } from '../../services/ms-service-proxy';

export const initialState: AuthState = {
  user: null,
  error: null,
  isAuthenticated: null,
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginDto>) {},
    loading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setUser(state, { payload }: PayloadAction<UserEntity>) {
      state.user = payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginError(state, { payload }: PayloadAction<any>) {
      state.error = payload;
    },
  },
});

export const { actions: authActions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAuthSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
