/**
 *
 * Dashboard
 *
 */
import React, { memo, useState } from 'react';
import { SideBar } from '../../components/SideBar/index';
interface Props {}

export const Dashboard = memo((props: Props) => {
  let [show, setShow] = useState<boolean>(false);

  return (
    <>
      {/* Left Side */}
      <SideBar />
      <div
        className={`w-full h-full lg:hidden absolute top-0 z-40 transition duration-300 ease-in transform ${
          show ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div
          className={`bg-gray-800 transition  ease-in-out w-full h-full ${
            show
              ? 'duration-200 delay-300 opacity-50'
              : 'duration-150 opacity-0'
          }`}
          onClick={() => setShow(!show)}
        />
        <div
          className={`fixed h-full overflow-y-auto z-40 top-0 transition duration-300 ease-in bg-red-400 shadow ${
            show ? 'w-72' : 'w-0'
          }`}
        >
          left side
        </div>
      </div>
      {/* Center content */}a
      <div>
        {/* <div className={`flex flex wrap`}>
            <div className={`w-full xl:w-8/12 mb-12 xl::mb-0 px-4`}>
              a
            </div>
          </div>*/}
        <button onClick={() => setShow(!show)}>Mostrar</button>
      </div>
      {/* Right side */}
    </>
  );
});
