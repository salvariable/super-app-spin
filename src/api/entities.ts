import type { TEntity } from '../types/data.types';

import { api } from '.';

export const getEntities = async () => {
  return await api.get<TEntity[]>('/entity');
};
