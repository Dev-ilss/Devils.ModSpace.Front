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
import { AddGame } from './containers/AddGame/Loadable';
import { EditGame } from './containers/EditGame/Loadable';
import RouteWrapper from './layouts/RouteWrapper';
import AuthRouteWrapper from './layouts/AuthRouteWrapper';
import { DefaultLayout } from './layouts/DefaultLayout';
import { MainLayout } from './layouts/MainLayout';

import {
  LOGIN_LINK,
  SIGN_UP_LINK,
  DASHBOARD_LINK,
  ADD_GAME_LINK,
  EDIT_GAME_LINK,
} from '../utils/constants';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - ModSpace" defaultTitle="ModSpace">
        <meta name="description" content="A ModSpace application" />
      </Helmet>

      <Switch>
        <AuthRouteWrapper
          exact
          path="/"
          component={Home}
          layout={DefaultLayout}
        />
        <AuthRouteWrapper
          exact
          path={DASHBOARD_LINK}
          component={Dashboard}
          layout={MainLayout}
        />
        <AuthRouteWrapper
          exact
          path={LOGIN_LINK}
          component={Login}
          layout={DefaultLayout}
        />
        <AuthRouteWrapper
          exact
          path={SIGN_UP_LINK}
          component={SignUp}
          layout={DefaultLayout}
        />
        <AuthRouteWrapper
          exact
          path={ADD_GAME_LINK}
          component={AddGame}
          layout={DefaultLayout}
        />
        <AuthRouteWrapper
          exact
          path={`${EDIT_GAME_LINK}/:id`}
          component={EditGame}
          layout={DefaultLayout}
        />
        <RouteWrapper component={NotFoundPage} layout={DefaultLayout} />
      </Switch>
    </BrowserRouter>
  );
}
