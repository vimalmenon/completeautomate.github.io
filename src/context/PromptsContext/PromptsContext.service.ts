'use client';

import React from 'react';

import { getPromptsApi } from '@data';
import { IPrompt } from '@types';
import { ApiService } from '@utility';

import { IUsePromptsHelper } from './PromptsContext';

export const usePromptsHelper = (): IUsePromptsHelper => {
  const [prompts, setPrompts] = React.useState<IPrompt[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const getPrompts = async (): Promise<void> => {
    setLoading(true);
    setErrorMessage(null);

    const { error, response } = await ApiService<IPrompt[]>(getPromptsApi());
    if (error) {
      const errorMsg = typeof error === 'string' ? error : 'Unable to load prompts right now.';
      setErrorMessage(errorMsg);
      setLoading(false);
      return;
    }
    setPrompts(response);
    setLoading(false);
  };

  return {
    errorMessage,
    getPrompts,
    loading,
    prompts,
  };
};
