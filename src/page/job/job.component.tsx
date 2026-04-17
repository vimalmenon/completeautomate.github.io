'use client';

import { useEffect } from 'react';

import { useJobsHelper } from '@context';

export const JobPage: React.FC = () => {
  const { getJobs } = useJobsHelper();
  useEffect(() => {
    getJobs();
  }, []);
  return <div></div>;
};
