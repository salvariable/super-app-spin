import type { TEntity } from '../types/data.types';

export const useFetchEntities = () => {
  const getEntities = async () => {
    try {
      const response = await fetch('http://localhost:3001/entity');
      const data: TEntity[] = await response.json();

      return data;
    } catch (e) {
      throw new Error('Error fetching entities');
    }
  };

  return { getEntities };
};
