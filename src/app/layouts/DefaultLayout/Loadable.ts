/**
 *
 * Asynchronously loads the component for DefaultLayout
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DefaultLayout = lazyLoad(
  () => import('./index'),
  module => module.DefaultLayout,
);
