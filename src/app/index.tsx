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
import RouteWrapper from './layouts/RouteWrapper';
import { DefaultLayout } from './layouts/DefaultLayout';
import { MainLayout } from './layouts/MainLayout';

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
          path="/login"
          component={Login}
          layout={DefaultLayout}
        />
        <RouteWrapper
          exact
          path="/sign-up"
          component={SignUp}
          layout={DefaultLayout}
        />
        <RouteWrapper
          exact
          path="/dashboard"
          component={Dashboard}
          layout={MainLayout}
        />
        <RouteWrapper
          exact
          path="/addgame"
          component={AddGame}
          layout={DefaultLayout}
        />
        <RouteWrapper component={NotFoundPage} layout={DefaultLayout} />
      </Switch>
    </BrowserRouter>
  );
}
