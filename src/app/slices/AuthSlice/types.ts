import { IUser } from '../../../types';

/* --- STATE --- */
//TODO: Add user type
export interface AuthState {
  user?: IUser | null;
  isAuthenticated: boolean;
  isLoading?: boolean;
  error?: string | null;
}

export interface Token {
  sub: number;
  iat: number;
  exp: number;
}
