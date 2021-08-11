/**
 *
 * EditGame
 *
 */
import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UpdateGameDto } from '../../services/ms-service-proxy';
import { useGameSlice } from '../../slices/GameSlice';
import { selectGame } from '../../slices/GameSlice/selectors';
import { IGame } from 'types';

import { API_BASE, API_PICTURE } from 'utils/constants';

export const EditGame = memo(({}) => {
  const [title, setTitle] = useState<string | undefined>('');
  const [description, setDescription] = useState<string | undefined>('');
  const [image, setImage] = useState<any>();
  const [imagesrc, setImageSrc] = useState<string | null>(null);
  const { actions } = useGameSlice();
  const dispatch = useDispatch();
  let { id } = useParams<any>();
  const game = useSelector(selectGame);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateGameDto>({
    mode: 'onBlur',
  });

  useEffect(() => {
    setDescription(game?.description);
    setTitle(game?.title);
  }, [game]);

  const onChange = e => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = (data: IGame) => {
    dispatch(
      actions.editGame({
        ...data,
        imageName: image.name,
        imagePath: game?.imagePath,
        id,
      } as IGame),
    );
  };

  return (
    <>
      <div className="col-span-3 px-4 py-10">
        <div className="w-full grid grid-rows-2">
          <div className="row-start-1 row-span-1 rounded overflow-auto">
            {imagesrc ? (
              <img className="w-full" src={imagesrc} />
            ) : (
              <img
                className="w-full"
                src={`${API_BASE}${API_PICTURE}${game?.imagePath}`}
                alt={game?.imageName}
              />
            )}
          </div>
          <div className="row-start-2 row-span-1 bg-white">
            <div className="w-full pt-10 pb-6 info">
              <h3 className="text-4xl font-bold mb-4">{title}</h3>
              <p className="text-lg">{description}</p>
            </div>
            <h2 className="text-left text-oxford-blue font-bold text-3xl mb-8">
              Editar un Juego
            </h2>
            <form id="editGameForm" onSubmit={handleSubmit(onSubmit)}>
              <input
                className={`form-input rounded border-2 py-4 w-full ${
                  errors.title
                    ? 'border-red-600 text-red-600'
                    : 'border-neon-blue'
                }`}
                type="text"
                {...register('title', { required: true })}
                placeholder="Titulo"
                onChange={e => setTitle(e.target.value)}
                value={title}
              />
              {errors.title && (
                <p className="text-red-600">
                  Por favor, introduce el titulo del juego
                </p>
              )}
              <input
                className={`form-input rounded border-2 py-4 w-full mt-8 ${
                  errors.description
                    ? 'border-red-600 text-red-600'
                    : 'border-neon-blue'
                }`}
                type="text"
                {...register('description', { required: true })}
                placeholder="Descripción"
                onChange={e => setDescription(e.target.value)}
                value={description}
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
            </form>
            <div className="w-full grid grid-cols-2 gap-3">
              <button
                form="editGameForm"
                type="submit"
                className="bg-neon-blue hover:bg-persian-blue mt-8 mb-10 py-4  rounded text-white font-semibold text-lg border-b-8 border-rounded cursor-pointer border-persian-blue"
              >
                Guardar
              </button>
              <button
                onClick={() => dispatch(actions.delete(id))}
                className="bg-purple-500 hover:bg-purple-600 mt-8 mb-10 py-4  rounded text-white font-semibold text-lg border-b-8 border-rounded cursor-pointer border-purple-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
