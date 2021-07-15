import { IGame } from 'types';

/* --- STATE --- */
export interface GameState {
  games?: IGame[];
  error?: string | null;
  selectedGame?: IGame | null;
}
