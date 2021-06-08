/**
 *
 * DefaultLayout
 *
 */
import React, { memo } from 'react';
import { Header } from '../../components/layout/Main/Header';

interface Props {
  children: any;
}

export const DefaultLayout = memo(({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
});
