'use client';

import { useEffect } from 'react';

import { getJobsApi } from '@data';
import { ApiService } from '@utility';

export const JobPage: React.FC = () => {
  useEffect(() => {
    ApiService(getJobsApi());
  }, []);
  return <div></div>;
};
