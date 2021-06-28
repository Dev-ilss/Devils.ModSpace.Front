// import { UserEntity } from '../../services/ms-service-proxy';

/* --- STATE --- */
//TODO: Add user type
export interface AuthState {
  user?: any | null;
  isAuthenticated?: boolean;
  isLoading?: boolean;
  error?: string | null;
}
