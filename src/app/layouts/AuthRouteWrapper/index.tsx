/**
 *
 * AuthRouteWrapper
 *
 */
import React, { memo, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthSlice } from '../../slices/AuthSlice';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../slices/AuthSlice/selectors';
import { useDispatch } from 'react-redux';
import {
  LOGIN_LINK,
  SIGN_UP_LINK,
  DASHBOARD_LINK,
} from '../../../utils/constants';

const AuthRouteWrapper = ({
  component: Component,
  layout: Layout,
  ...routeConfig
}) => {
  const { isLoading, isAuthenticated, error } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const { actions } = useAuthSlice();

  useEffect(() => {
    dispatch(actions.checkAuth());
  }, [dispatch]);

  return isLoading ? (
    // TODO: Crear componente de carga
    <>Cargando</>
  ) : (
    <>
      {error && <p>Hay un error</p>}
      <Route {...routeConfig} render={props => renderRoutedComponent(props)} />
    </>
  );

  function renderRoutedComponent(props) {
    const isLoginOrSignUpPage =
      props.location.pathname.includes(LOGIN_LINK) ||
      props.location.pathname.includes(SIGN_UP_LINK);

    if (isAuthenticated) {
      if (isLoginOrSignUpPage) {
        return <Redirect to={DASHBOARD_LINK} />;
      }

      return (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      );
    } else {
      if (isLoginOrSignUpPage) {
        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }

      return (
        <Redirect
          to={{
            pathname: LOGIN_LINK,
            state: { from: props.location },
          }}
        />
      );
    }
  }
};

export default memo(AuthRouteWrapper);
