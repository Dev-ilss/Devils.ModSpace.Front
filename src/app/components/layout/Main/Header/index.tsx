/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectAuth } from '../../../../slices/AuthSlice/selectors';

import {
  DASHBOARD_LINK,
  LOGIN_LINK,
  SIGN_UP_LINK,
} from '../../../../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = memo(({ openMovileMenu }: any) => {
  const { isAuthenticated } = useSelector(selectAuth);

  const location = useLocation<any>();
  return (
    <header className="block">
      <nav className="bg-white xl:block hidden">
        <div className="mx-auto container px-6 py-2 xl:py-0">
          <div className="flex items-center justify-between">
            <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
              <Link
                to={isAuthenticated ? DASHBOARD_LINK : '/'}
                className="flex items-center"
              >
                <svg
                  aria-label="Home"
                  id="logo"
                  enableBackground="new 0 0 300 300"
                  height={44}
                  viewBox="0 0 300 300"
                  width={43}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path
                      fill="#4c51bf"
                      d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                    />
                  </g>
                </svg>
                <h2 className="hidden sm:block text-base text-gray-700 font-bold leading-normal pl-3">
                  ModSpace
                </h2>
              </Link>
            </div>
            <ul className="flex">
              <li className="hidden px-5 py-6 xl:flex">
                <Link
                  to={LOGIN_LINK}
                  className="flex items-center text-sm leading-5 text-cadet-blue-crayola font-bold focus:outline-none transition duration-150 ease-in-out"
                >
                  Iniciar Sesión
                </Link>
              </li>
              <li className="hidden px-5 py-6 xl:flex">
                <Link
                  to={SIGN_UP_LINK}
                  className="flex items-center text-sm leading-5 text-cadet-blue-crayola font-bold focus:outline-none transition duration-150 ease-in-out"
                >
                  <button>Registrarse</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Movil starts */}
      <nav>
        <div className="py-4 px-2 w-full flex xl:hidden justify-between items-center bg-white sticky top-0 z-20">
          <div className="w-2/5 pl-5">
            <Link to="/">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={43}
                  height={44}
                  viewBox="0 0 43 44"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z"
                    fill="#667EEA"
                  />
                </svg>
                <h2 className="text-base text-gray-700 font-bold leading-normal pl-3">
                  ModSpace
                </h2>
              </div>
            </Link>
          </div>
          {isAuthenticated ? (
            <ul className="flex items-center">
              <li className="md:hidden px-5 flex items-center">
                <Link
                  to={DASHBOARD_LINK}
                  className="flex items-center text-sm leading-5 text-gray-700 font-semibold focus:outline-none transition duration-150 ease-in-out"
                >
                  Dashboard
                </Link>
              </li>
              {location.pathname !== '/' && (
                <li className="md:hidden px-5 flex items-center">
                  <p className="flex items-center text-sm leading-5 text-gray-700 font-semibold focus:outline-none transition duration-150 ease-in-out">
                    <button onClick={() => openMovileMenu()}>
                      <FontAwesomeIcon icon={['fas', 'bars']} size="lg" />
                    </button>
                  </p>
                </li>
              )}
            </ul>
          ) : (
            <ul className="flex items-center">
              <li className="md:hidden px-5 flex items-center">
                <Link
                  to={LOGIN_LINK}
                  className="flex items-center text-sm leading-5 text-gray-700 font-semibold focus:outline-none transition duration-150 ease-in-out"
                >
                  Iniciar Sesión
                </Link>
              </li>
              <li className="md:hidden px-5 flex items-center">
                <Link
                  to={SIGN_UP_LINK}
                  className="flex items-center text-sm leading-5 text-gray-700 font-semibold focus:outline-none transition duration-150 ease-in-out"
                >
                  Registrarse
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
});
