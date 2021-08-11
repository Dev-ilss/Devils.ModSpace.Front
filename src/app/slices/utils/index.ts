import decode from 'jwt-decode';
import { Token } from '../AuthSlice/types';

export const checkAuthExpiration = (token: any) => {
  let { exp } = decode(token) as Token;

  return Date.now() <= exp * 1000;
};
