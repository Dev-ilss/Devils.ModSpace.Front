/**
 *
 * SignUp
 *
 */
import React, { memo } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { useAuthSlice } from '../../slices/AuthSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from '../../slices/AuthSlice/selectors';
import { useForm } from 'react-hook-form';
import { CreateUserDto } from '../../services/ms-service-proxy';
import { DASHBOARD_LINK, LOGIN_LINK } from 'utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LocationState {
  from: {
    pathname: string;
  };
}

export const SignUp = memo(({}) => {
  const auth = useSelector(selectAuth);
  const location = useLocation<LocationState>();
  const dispatch = useDispatch();
  const { actions } = useAuthSlice();
  const { register, handleSubmit } = useForm<CreateUserDto>({
    mode: 'onBlur',
  });

  const { from } = location.state || { from: { pathname: DASHBOARD_LINK } };

  const onSubmit = (data: CreateUserDto) => {
    let formData = { ...data, status: true, roles: ['ADMIN'] } as CreateUserDto;
    dispatch(actions.register(formData));
  };

  if (auth.isAuthenticated) return <Redirect to={from} />;
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center text-oxford-blue font-bold text-3xl mb-12">
          Registrate
        </h2>
        <form className="w-4/5 mx-auto mb-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={`form-input rounded border-2 py-4 w-full mb-8 ${
              auth.error ? 'border-red-600 text-red-600' : 'border-neon-blue'
            }`}
            type="text"
            {...register('user')}
            placeholder="Usuario"
          />
          <div className="w-full grid grid-cols-2 gap-2">
            <input
              className={`form-input rounded border-2 py-4 col-span-1 col-start-1 mb-8 ${
                auth.error ? 'border-red-600 text-red-600' : 'border-neon-blue'
              }`}
              type="text"
              {...register('name')}
              placeholder="Nombre"
            />
            <input
              className={`form-input rounded border-2 py-4 col-span-1 col-start-2 mb-8 ${
                auth.error ? 'border-red-600 text-red-600' : 'border-neon-blue'
              }`}
              type="text"
              {...register('lastName')}
              placeholder="Apellido"
            />
          </div>
          <input
            className={`form-input rounded border-2 py-4 w-full mb-8 ${
              auth.error ? 'border-red-600 text-red-600' : 'border-neon-blue'
            }`}
            type="email"
            {...register('email')}
            placeholder="Email"
          />
          <input
            className={`form-input rounded border-2 py-4 w-full mb-8 ${
              auth.error ? 'border-red-600 text-red-600' : 'border-neon-blue'
            }`}
            type="tel"
            {...register('tel')}
            placeholder="Teléfono"
          />
          <input
            className={`form-input rounded border-2 py-4 w-full mb-8 ${
              auth.error ? 'border-red-600 text-red-600' : 'border-neon-blue'
            }`}
            type="password"
            {...register('password')}
            placeholder="Contraseña"
          />
          <button
            type="submit"
            className={`w-full bg-neon-blue hover:bg-persian-blue py-4 rounded text-white font-semibold text-lg border-b-8 border-rounded cursor-pointer border-persian-blue`}
            disabled={auth.isLoading}
          >
            {!auth.isLoading ? (
              <>Crear cuenta</>
            ) : (
              <div>
                <span className="mr-2">Registrandose</span>
                <FontAwesomeIcon icon={['fas', 'spinner']} spin />
              </div>
            )}
          </button>
        </form>
        <p className="text-center font-semibold">
          ¿Ya tienes cuenta? Inicia Sesión{' '}
          <Link to="/login" className="text-neon-blue hover:text-persian-blue">
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
