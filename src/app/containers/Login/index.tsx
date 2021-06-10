/**
 *
 * Login
 *
 */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useAuthSlice } from '../../slices/AuthSlice';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../slices/AuthSlice/selectors';

import { LoginDto } from '../../services/ms-service-proxy';

export const Login = memo(() => {
  const { register, handleSubmit } = useForm<LoginDto>({
    mode: 'onBlur',
  });
  const dispatch = useDispatch();
  const { actions } = useAuthSlice();
  const auth = useSelector(selectAuth);

  const onSubmit = (data: LoginDto) => dispatch(actions.login(data));

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center text-oxford-blue font-bold text-3xl mb-12">
          Inicia Sesión
        </h2>
        <form className="w-4/5 mx-auto mb-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={`form-input rounded border-2 py-4 w-full mb-8 ${
              auth.error ? 'border-red-600 text-red-600' : 'border-neon-blue'
            }`}
            type="email"
            {...register('email')}
            id="email"
            placeholder="Email"
          />
          <input
            className={`form-input rounded border-2 py-4 w-full mb-8 ${
              auth.error ? 'border-red-600 text-red-600' : 'border-neon-blue'
            }`}
            type="password"
            {...register('password')}
            id="password"
            placeholder="Contraseña"
          />
          <input
            type="submit"
            value="Iniciar sesión"
            className="w-full bg-neon-blue hover:bg-persian-blue py-4  rounded text-white font-semibold text-lg border-b-8 border-rounded cursor-pointer border-persian-blue"
          />
        </form>
        <p className="text-center font-semibold">
          ¿No tienes cuenta? Registrate gratis{' '}
          <Link
            to="/sign-up"
            className="text-neon-blue hover:text-persian-blue"
          >
            aquí
          </Link>
          .
        </p>
        {auth.error && (
          <div className="w-4/5 mx-auto bg-red-300 border-red-600 border-2 py-4 px-6 text-red-600 rounded mt-10">
            <p>{auth.error}</p>
          </div>
        )}
      </div>
    </>
  );
});
