/**
 *
 * AddGame
 *
 */
import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateGameDto } from '../../services/ms-service-proxy';
import { useGameSlice } from '../../slices/GameSlice';
import { selectGames } from '../../slices/GameSlice/selectors';

const schema = yup.object().shape({
  title: yup.string().required('Por favor, introduce el titulo del juego'),
  description: yup
    .string()
    .required('Por favor, introduce la descripción del juego'),
  imageName: yup
    .mixed()
    .required('Por favor selecciona una imagen')
    .test('fileSize', value => {
      return value && value[0].size <= 10000000;
    }),
});

export const AddGame = memo(({}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<any>();
  const [imagesrc, setImageSrc] = useState<string | null>(null);
  const { actions } = useGameSlice();
  const dispatch = useDispatch();
  const game = useSelector(selectGames);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateGameDto>({
    mode: 'onBlur',
  });

  const onChange = e => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = (data: CreateGameDto) => {
    dispatch(
      actions.addGame({ ...data, imageName: image.name } as CreateGameDto),
    );
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="w-full grid grid-rows-2 px-4">
          <div className="row-start-1 row-span-1 rounded overflow-auto">
            {imagesrc ? (
              <img className="w-full" src={imagesrc} />
            ) : (
              <div className="h-48 bg-gray-400"></div>
            )}
            <div className="w-full pt-10 pb-6 info">
              <h3 className="text-4xl font-bold mb-4">{title}</h3>
              <p className="text-lg">{description}</p>
            </div>
          </div>
          <div className="row-start-2 row-span-1 bg-white">
            <h2 className="text-left text-oxford-blue font-bold text-3xl mb-8">
              Agrega un Juego
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className={`form-input rounded border-2 py-4 w-full ${
                  game.error || errors.title
                    ? 'border-red-600 text-red-600'
                    : 'border-neon-blue'
                }`}
                type="text"
                {...register('title', { required: true })}
                placeholder="Titulo"
                onChange={e => setTitle(e.target.value)}
              />
              {errors.title && (
                <p className="text-red-600">
                  Por favor, introduce el titulo del juego
                </p>
              )}
              <input
                className={`form-input rounded border-2 py-4 w-full mt-8 ${
                  game.error || errors.description
                    ? 'border-red-600 text-red-600'
                    : 'border-neon-blue'
                }`}
                type="text"
                {...register('description', { required: true })}
                placeholder="Descripción"
                onChange={e => setDescription(e.target.value)}
              />
              {errors.description && (
                <p className="text-red-600">
                  Por favor, introduce la descripción del juego
                </p>
              )}
              <label className="inline-block mt-8 px-4 pt-4 pb-6 bg-white rounded-md shadow-md tracking-wide border border-blue cursor-pointer hover:bg-neon-blue hover:text-white text-blue-600 font-semibold text-lg ease-linear transition-all duration-150">
                <span className="text-base leading-normal">
                  Selecciona una Imagen
                </span>
                <input
                  type="file"
                  {...register('imageName')}
                  onChange={onChange}
                  className="hidden"
                />
              </label>
              {errors.imageName && (
                <p className="text-red-600">{errors.imageName.message}</p>
              )}
              <input
                type="submit"
                value="Agregar"
                className="w-full mt-8 mb-10 bg-neon-blue hover:bg-persian-blue py-4  rounded text-white font-semibold text-lg border-b-8 border-rounded cursor-pointer border-persian-blue"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
});
