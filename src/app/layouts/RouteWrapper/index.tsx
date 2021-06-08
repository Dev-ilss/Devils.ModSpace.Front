/**
 *
 * RouteWrapper
 *
 */
import React, { memo } from 'react';
import { Route } from 'react-router-dom';

const RouteWrapper = ({
  component: Component,
  layout: Layout,
  ...routeConfig
}) => (
  <Route
    {...routeConfig}
    render={props => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default memo(RouteWrapper);
