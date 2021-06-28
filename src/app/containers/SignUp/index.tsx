/**
 *
 * SignUp
 *
 */
import React, { memo } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { useAuthSlice } from '../../slices/AuthSlice';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../slices/AuthSlice/selectors';
import { DASHBOARD_LINK } from 'utils/constants';

interface LocationState {
  from: {
    pathname: string;
  };
}

export const SignUp = memo(({}) => {
  const auth = useSelector(selectAuth);
  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: DASHBOARD_LINK } };

  if (auth.isAuthenticated) return <Redirect to={from} />;

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center text-oxford-blue font-bold text-3xl mb-12">
          Registrate
        </h2>
        <form className="w-4/5 mx-auto mb-4" onSubmit={e => console.log(e)}>
          <input
            className="form-input rounded border-neon-blue border-2 py-4 w-full mb-8"
            type="text"
            name="user"
            placeholder="Usuario"
          />
          <div className="w-full grid grid-cols-2 gap-2">
            <input
              className="form-input rounded border-neon-blue border-2 py-4 col-span-1 col-start-1 mb-8"
              type="text"
              name="name"
              placeholder="Nombre"
            />
            <input
              className="form-input rounded border-neon-blue border-2 py-4 col-span-1 col-start-2 mb-8"
              type="text"
              name="lastName"
              placeholder="Apellido"
            />
          </div>
          <input
            className="form-input rounded border-neon-blue border-2 py-4 w-full mb-8"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="form-input rounded border-neon-blue border-2 py-4 w-full mb-8"
            type="tel"
            name="tel"
            placeholder="Teléfono"
          />
          <div className="w-full grid grid-cols-2 gap-2">
            <input
              className="form-input rounded border-neon-blue border-2 py-4 col-span-1 col-start-1 mb-8"
              type="password"
              name="password"
              placeholder="Contraseña"
            />
            <input
              className="form-input rounded border-neon-blue border-2 py-4 col-span-1 col-start-2 mb-8"
              type="password"
              name="confirmPassword"
              placeholder="Confirma contraseña"
            />
          </div>
          <input
            type="submit"
            value="Crear cuenta"
            className="w-full bg-neon-blue hover:bg-persian-blue py-4  rounded text-white font-semibold text-lg border-b-8 border-rounded cursor-pointer border-persian-blue"
          />
        </form>
        <p className="text-center font-semibold">
          ¿Ya tienes cuenta? Inicia Sesión{' '}
          <Link to="/login" className="text-neon-blue hover:text-persian-blue">
            aquí
          </Link>
          .
        </p>
      </div>
    </>
  );
});
