/**
 *
 * Dashboard
 *
 */
import React, { memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectGames } from '../../slices/GameSlice/selectors';
import { useGameSlice } from '../../slices/GameSlice';

import { Image } from '../../components/layout/Main/Image/Loadable';

import { ADD_GAME_LINK, EDIT_GAME_LINK } from '../../../utils/constants';
interface Props {}

export const Dashboard = memo((props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { actions } = useGameSlice();
  const { games } = useSelector(selectGames);

  useEffect(() => {
    dispatch(actions.loadGames());
  }, [dispatch, actions]);

  return (
    <>
      <div className="col-span-3 px-4 py-10">
        <h1 className="text-oxford-blue font-bold text-2xl">
          TODOS LOS JUEGOS
        </h1>
        <div className="w-full my-3 grid grid-cols-2 gap-4">
          {games && games?.length > 0 ? (
            games.map((game, index) => (
              <div
                key={game.id}
                onClick={() => {
                  dispatch(actions.selectGame(game.id));
                  history.push(`${EDIT_GAME_LINK}/${game.id}`);
                }}
                className="col-span-1 h-64 relative flex justify-center items-center text-gray-400 cursor-pointer overflow-hidden"
              >
                <Image
                  imagePath={game.imagePath}
                  imageName={game.imageName}
                  imageIndex={index}
                />
                <div className="group bg-black bg-opacity-0 absolute top-0 left-0 z-20 w-full h-full hover:bg-opacity-50 flex items-end pl-4 pb-10 transition-all duration-500 ease-in-out">
                  <h3 className="transform translate-y-20 text-white opacity-0 z-30 w-2/3 text-xl group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                    {game.title}
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center font-semibold text-3xl h-32">
              <h3>No hay juegos, añade uno!</h3>
            </div>
          )}
          <div
            onClick={() => history.push(ADD_GAME_LINK)}
            className="col-span-1 h-64 relative flex justify-center items-center text-gray-400 cursor-pointer"
          >
            <FontAwesomeIcon icon={['fas', 'plus']} size="3x" />
            <div className="group border-2 border-dotted border-gray-400 rounded bg-gray-400 bg-opacity-0 absolute top-0 left-0 z-20 w-full h-full hover:bg-opacity-100 flex items-center justify-center transition-all duration-500 ease-in-out">
              <h3 className="transform translate-y-20 text-gray-500 font-bold opacity-0 z-30 text-xl group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                Agregar Juego
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Right side */}
    </>
  );
});
