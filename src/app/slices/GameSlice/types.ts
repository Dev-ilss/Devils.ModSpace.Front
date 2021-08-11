import { IGame } from 'types';

/* --- STATE --- */
export interface GameState {
  games?: IGame[];
  error?: string | null;
  selectedGame?: IGame | null;
}

export interface CreateGameDto {
  title?: string;
  description?: string;
  image?: any;
}

export interface GamesPictures {
  name?: string;
}
