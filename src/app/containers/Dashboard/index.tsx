/**
 *
 * Dashboard
 *
 */
import React, { memo, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectGames } from '../../slices/GameSlice/selectors';
import { useGameSlice } from '../../slices/GameSlice';

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
      <div className="col-span-3">
        <div className="w-full my-3 grid grid-cols-3 bg-gray-200 py-10">
          {games && games?.length > 0 ? (
            games.map(game => (
              <div
                key={game.id}
                onClick={() => {
                  dispatch(actions.selectGame(game.id));
                  history.push(`${EDIT_GAME_LINK}/${game.id}`);
                }}
                className="col-span-1 h-32 flex justify-center items-center text-gray-400 cursor-pointer"
              >
                {game.title}
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center font-semibold text-3xl h-32">
              <h3>No hay juegos, añade uno!</h3>
            </div>
          )}
          <div
            onClick={() => history.push(ADD_GAME_LINK)}
            className="col-span-1 h-32 flex justify-center items-center text-gray-400 cursor-pointer"
          >
            <FontAwesomeIcon icon={['fas', 'plus']} size="3x" />
          </div>
        </div>
      </div>
      {/* Right side */}
    </>
  );
});
