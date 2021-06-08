/**
 *
 * Home
 *
 */
import React, { memo } from 'react';
import wave from '../../../assets/wave.svg';

interface Props {}

export const Home = memo((props: Props) => {
  return (
    <>
      <div className="hero container mx-auto px-6">
        <div className="cta">
          <div className="cta-text mb-5">
            <h1 className="text-oxford-blue font-bold leading-tight text-6xl mb-3">
              <span className="block m-0 p-0">TU NUEVA</span>
              <span className="block m-0 p-0">PLATAFORMA</span>
              <span className="block m-0 p-0">FAVORITA</span>
              <span className="block m-0 p-0">DE MODS</span>
            </h1>
            <p className="w-5/6 italic text-xl font-normal text-cadet-blue-crayola">
              Descubre recursos adicionales para los juegos que te gustan,
              navega y selecciona los que más necesites.
            </p>
          </div>
          <div className="cta-buttons">
            <button className="bg-persian-blue transition duration-150 ease-in-out hover:bg-neon-blue rounded text-white px-6 py-3 text-lg">
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>
      <div className="newsletter ">
        <img className="w-full" src={wave} alt="wave" />
        <div className="bg-oxford-blue">
          <div className="container mx-auto px-6 py-12">
            <div className="mb-8">
              <h3 className="text-white text-center text-3xl font-semibold mb-4">
                NEWSLETTER
              </h3>
              <p className="text-white text-center ">
                Mantente al tanto de noticias y eventos de la plataforma.
                ¡Continúa modificando el Múndo!
              </p>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <input
                type="email"
                className="form-input col-span-3 rounded border-none"
                placeholder="e.j john@doe.com"
              />
              <button className="bg-persian-blue transition duration-150 ease-in-out hover:bg-neon-blue rounded text-white px-6 py-3 flex items-center justify-center">
                icono
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
