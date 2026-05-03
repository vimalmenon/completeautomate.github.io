'use client';

import { useCallback } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type QueryParamValue = string | number | null | undefined;
type QueryParamUpdates = Record<string, QueryParamValue>;
export type JobQueryMode = 'view' | 'edit' | null;

export const JOB_QUERY_KEYS = {
  jobId: 'jobId',
  mode: 'mode',
} as const;

export const useJobQueryParams = (): {
  clearQueryParams: (keys: string[]) => void;
  getQueryParam: (key: string) => string | null;
  jobId: string | null;
  mode: JobQueryMode;
  setQueryParams: (updates: QueryParamUpdates) => void;
} => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const getQueryParam = useCallback(
    (key: string): string | null => searchParams.get(key),
    [searchParams]
  );

  const setQueryParams = useCallback(
    (updates: QueryParamUpdates): void => {
      const nextParams = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === undefined || value === '') {
          nextParams.delete(key);
          return;
        }

        nextParams.set(key, String(value));
      });

      const nextQuery = nextParams.toString();
      router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const clearQueryParams = useCallback(
    (keys: string[]): void => {
      setQueryParams(Object.fromEntries(keys.map((key) => [key, null])) as Record<string, null>);
    },
    [setQueryParams]
  );

  const modeValue = getQueryParam(JOB_QUERY_KEYS.mode);
  const mode: JobQueryMode = modeValue === 'view' || modeValue === 'edit' ? modeValue : null;

  return {
    clearQueryParams,
    getQueryParam,
    jobId: getQueryParam(JOB_QUERY_KEYS.jobId),
    mode,
    setQueryParams,
  };
};
