/**
 *
 * Login
 *
 */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export const Login = memo((props: Props) => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center text-oxford-blue font-bold text-3xl mb-12">
          Inicia Sesión
        </h2>
        <form className="w-4/5 mx-auto mb-4" onSubmit={e => console.log(e)}>
          <input
            className="form-input rounded border-neon-blue border-2 py-4 w-full mb-8"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="form-input rounded border-neon-blue border-2 py-4 w-full mb-8"
            type="password"
            name="password"
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
      </div>
    </>
  );
});
