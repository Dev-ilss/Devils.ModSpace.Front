/**
 *
 * AddGame
 *
 */
import React, { memo, useState } from 'react';

interface Props {}
interface Game {
  title: string;
  description: string;
  image: string;
}
export const AddGame = memo((props: Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState();
  const [imagesrc, setImageSrc] = useState('');
  const onChange = e => {
    console.log(e.target.name + ' ', e.target.value);
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    }
    if (e.target.name === 'description') {
      setDescription(e.target.value);
    }
    if (e.target.name === 'image') {
      if (e.target.files && e.target.files[0]) {
        setImage(e.target.files[0]);
        setImageSrc(URL.createObjectURL(e.target.files[0]));
      }
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full grid grid-cols-2 gap-2">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-left text-oxford-blue font-bold text-3xl mb-12">
              Agrega tu Juego
            </h2>
            <form>
              <input
                className="form-input rounded border-neon-blue border-2 py-4 w-full mb-8"
                type="text"
                name="title"
                placeholder="Titulo"
                onChange={onChange}
              />
              <input
                className="form-input rounded border-neon-blue border-2 py-4 w-full mb-8"
                type="text"
                name="description"
                placeholder="Descripción"
                onChange={onChange}
              />
              <label
                className="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide 
            uppercase border border-blue cursor-pointer hover:bg-neon-blue hover:text-white text-blue-600 
            ease-linear transition-all duration-150"
              >
                <i className="fas fa-cloud-upload-alt fa-3x"></i>
                <span className="mt-2 text-base leading-normal">
                  Selecciona una Imagen
                </span>
                <input
                  type="file"
                  name="image"
                  onChange={onChange}
                  className="hidden"
                />
              </label>
              <br />
              <div className="w-full grid grid-cols-2 gap-2">
                <input
                  type="submit"
                  value="Agregar"
                  className="w-full bg-neon-blue hover:bg-persian-blue py-4  rounded text-white font-semibold text-lg border-b-8 border-rounded cursor-pointer border-persian-blue"
                />
              </div>
            </form>
          </div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="py-3 sm:max-w-xl sm:mx-auto">
              <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
                <div className="h-48 overflow-visible w-1/2">
                  <img className="rounded-3xl shadow-lg" src={imagesrc} />
                </div>
                <div className="flex flex-col w-1/2 space-y-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-bold">{title}</h2>
                  </div>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
