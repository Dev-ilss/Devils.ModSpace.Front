/**
 *
 * Asynchronously loads the component for RouteWrapper
 *
 */

import { lazyLoad } from 'utils/loadable';

export const RouteWrapper = lazyLoad(
  () => import('./index'),
  module => module.RouteWrapper,
);
