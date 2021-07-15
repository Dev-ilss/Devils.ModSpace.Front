import { IGame } from './IGame';

export interface IUser {
  id: number;
  user: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  tel: string;
  games: IGame[];
  status: boolean;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
