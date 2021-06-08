/**
 *
 * MainLayout
 *
 */
import React, { memo } from 'react';

interface Props {
  children: any;
}

export const MainLayout = memo(({ children }: Props) => {
  return <>{children}</>;
});
