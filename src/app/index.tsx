/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, BrowserRouter } from 'react-router-dom';

import { Home } from './containers/Home/Loadable';
import { Dashboard } from './containers/Dashboard/Loadable';
import { Login } from './containers/Login/Loadable';
import { SignUp } from './containers/SignUp/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

import RouteWrapper from './layouts/RouteWrapper';
import { DefaultLayout } from './layouts/DefaultLayout';
import { MainLayout } from './layouts/MainLayout';

import { LOGIN_LINK, SIGN_UP_LINK, DASHBOARD_LINK } from '../utils/constants';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - ModSpace" defaultTitle="ModSpace">
        <meta name="description" content="A ModSpace application" />
      </Helmet>

      <Switch>
        <RouteWrapper exact path="/" component={Home} layout={DefaultLayout} />
        <RouteWrapper
          exact
          path={LOGIN_LINK}
          component={Login}
          layout={DefaultLayout}
        />
        <RouteWrapper
          exact
          path={SIGN_UP_LINK}
          component={SignUp}
          layout={DefaultLayout}
        />
        <RouteWrapper
          exact
          path={DASHBOARD_LINK}
          component={Dashboard}
          layout={MainLayout}
        />
        <RouteWrapper component={NotFoundPage} layout={DefaultLayout} />
      </Switch>
    </BrowserRouter>
  );
}
