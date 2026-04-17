'use client';

import React from 'react';

import { IAdminContext } from '@types';

export const AdminContextProvider = React.createContext<IAdminContext>({} as IAdminContext);

export const useAdminContext = (): IAdminContext =>
  React.useContext<IAdminContext>(AdminContextProvider);
