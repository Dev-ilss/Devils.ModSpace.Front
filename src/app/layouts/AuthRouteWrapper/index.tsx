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
  const dispatch = useDispatch();
  const { actions } = useAuthSlice();
  const { isLoading, isAuthenticated, error } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(actions.checkAuth());
  }, [dispatch, actions]);

  return isLoading ? (
    // TODO: Crear componente de carga
    <>Cargando</>
  ) : (
    <>
      <Route {...routeConfig} render={props => renderRoutedComponent(props)} />
    </>
  );

  function renderRoutedComponent(props) {
    if (props.location.pathname === '/') {
      return (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      );
    }

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
