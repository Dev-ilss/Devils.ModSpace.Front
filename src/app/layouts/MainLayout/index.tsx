/**
 *
 * MainLayout
 *
 */
import React, { memo, useState } from 'react';
import { SideBar } from '../../components/SideBar/index';
import Transition from '../../components/Transition';
import { Header } from 'app/components/layout/Main/Header';
import { useSelector } from 'react-redux';
import { selectAuth } from 'app/slices/AuthSlice/selectors';

interface Props {
  children: any;
}

export const MainLayout = memo(({ children }: Props) => {
  let [isClosed, setIsClosed] = useState<boolean>(true);
  const { isAuthenticated, user } = useSelector(selectAuth);
  return (
    <>
      <Header openMovileMenu={() => setIsClosed(!isClosed)} />
      <div className="grid grid-cols-3 relative h-screen">
        <Transition
          show={!isClosed}
          enter="transition-all duration-500"
          enterFrom="-ml-64"
          enterTo="ml-0"
          leave="transition-all duration-500"
          leaveTo="-ml-64"
        >
          {<SideBar user={isAuthenticated && user} />}
        </Transition>
        <Transition
          appear={true}
          show={!isClosed}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <div
            onClick={() => setIsClosed(!isClosed)}
            className="cursor-pointer fixed inset-0 bg-black opacity-0 z-30"
          />
        </Transition>
        {children}
      </div>
    </>
  );
});
