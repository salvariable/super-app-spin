import type { TTransaction } from '../types/data.types';

import { api } from '.';

export const getTransactions = async () => {
  return await api.get<TTransaction[]>('/history');
};
