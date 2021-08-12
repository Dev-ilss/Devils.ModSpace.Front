/**
 *
 * SideBar
 *
 */
import React, { memo } from 'react';
import { IUser } from 'types';

import { useAuthSlice } from '../../slices/AuthSlice';
import { useDispatch } from 'react-redux';

import profilePic from '../../../assets/profile.png';

interface Props {
  user: IUser | any;
}

export const SideBar = memo(({ user }: Props) => {
  const dispatch = useDispatch();
  const { actions } = useAuthSlice();

  return (
    <aside className="bg-white w-64 min-h-full lg:h-screen flex flex-col fixed top-0 left-0 z-40 md:col-span-2">
      <div className="bg-white border-r border-b px-4 h-24 flex items-center">
        <img
          className="w-20 h-20 rounded mr-2"
          src={profilePic}
          alt="Foto de perfil"
        />
        <div>
          <span className="block font-semibold">{user?.user}</span>
          <span className="block text-xs text-gray-400 ">{user?.email}</span>
        </div>
      </div>

      <div className="border-r flex flex-grow">
        <nav className="h-100 flex-grow">
          <ul className="h-full flex flex-col">
            <li className="p-3">
              <p>Inicio</p>
            </li>
            <li className="p-3">
              <p>Perfil</p>
            </li>
            <li className="p-3">
              <p>Mis Mods</p>
            </li>
            <li className="mt-auto mb-24 p-3">
              <button onClick={() => dispatch(actions.logout())}>Salir</button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
});
