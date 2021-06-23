/**
 *
 * Asynchronously loads the component for AddGame
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AddGame = lazyLoad(
  () => import('./index'),
  module => module.AddGame,
);
