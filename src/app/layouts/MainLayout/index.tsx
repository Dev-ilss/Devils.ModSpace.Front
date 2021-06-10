/**
 *
 * MainLayout
 *
 */
import React, { memo } from 'react';
import { Header } from 'app/components/layout/Main/Header';

interface Props {
  children: any;
}

export const MainLayout = memo(({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 relative h-screen">{children}</div>
    </>
  );
});
