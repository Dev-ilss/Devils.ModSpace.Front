import { IUser } from '../../../types';

/* --- STATE --- */
//TODO: Add user type
export interface AuthState {
  user?: IUser | null;
  isAuthenticated: boolean;
  isLoading?: boolean;
  error?: string | null;
}
