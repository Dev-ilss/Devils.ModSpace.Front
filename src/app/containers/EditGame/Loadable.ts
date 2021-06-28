/**
 *
 * Asynchronously loads the component for EditGame
 *
 */

import { lazyLoad } from 'utils/loadable';

export const EditGame = lazyLoad(
  () => import('./index'),
  module => module.EditGame,
);
