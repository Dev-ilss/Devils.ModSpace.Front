import { AuthState } from 'app/slices/AuthSlice/types';
import { GameState } from 'app/slices/GameSlice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  auth?: AuthState;
  game?: GameState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
