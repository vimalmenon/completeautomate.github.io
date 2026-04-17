'use client';

import React from 'react';

import { IReactChildren } from '@types';

import { AdminContextProvider } from './AdminContext.service';

export const AdminContext: React.FC<IReactChildren> = ({ children }) => {
  const [loading] = React.useState<boolean>(false);
  return <AdminContextProvider.Provider value={loading}>{children}</AdminContextProvider.Provider>;
};
