/**
 *
 * Image
 *
 */
import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGameSlice } from '../../../../slices/GameSlice';

import { API_BASE, API_PICTURE } from '../../../../../utils/constants';

interface Props {
  imagePath: string;
  imageName: string;
  imageIndex: number;
}

export const Image = memo(({ imagePath, imageName, imageIndex }: Props) => {
  // const dispatch = useDispatch();
  // const { actions } = useGameSlice();

  // useEffect(() => {
  //   dispatch(actions.getGameImage(imagePath));
  // }, []);

  return (
    <>
      <img
        src={`${API_BASE}${API_PICTURE}${imagePath}`}
        className="object-cover w-full h-64 absolute top-0 left-0 z-10"
        alt={imageName}
      />
    </>
  );
});
