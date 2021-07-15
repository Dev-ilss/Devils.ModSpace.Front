import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../utils/@reduxjs/toolkit';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';
import { authSaga } from './saga';
import { AuthState } from './types';
import { LoginDto, CreateUserDto } from '../../services/ms-service-proxy';
import { IUser } from '../../../types';

export const initialState: AuthState = {
  user: null,
  error: null,
  isAuthenticated: false,
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
    setUser(state, { payload }: PayloadAction<IUser>) {
      state.user = payload;
      state.isAuthenticated = true;
      state.error = null;
      state.isLoading = false;
    },
    loginError(state, { payload }: PayloadAction<any>) {
      state.error = payload;
    },
    checkAuth(state, payload: PayloadAction) {},
    logout(state, action: PayloadAction) {
      state.isAuthenticated = false;
      state.user = null;
    },
    register(state, action: PayloadAction<CreateUserDto>) {},
  },
});

export const { actions: authActions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authSaga });
  return { actions: slice.actions };
};
