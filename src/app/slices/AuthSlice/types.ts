import { UserEntity } from '../../services/ms-service-proxy';

/* --- STATE --- */
export interface AuthState {
  user?: UserEntity | null;
  isAuthenticated?: boolean | null;
  isLoading?: boolean;
  error?: string | null;
}
