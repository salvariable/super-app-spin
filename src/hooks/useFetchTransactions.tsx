import { useEffect, useState } from 'react';

import type { TTransaction } from '../types/data.types';

type TransactionsResponse = {
  data: TTransaction[],
  error: string, 
  loading: boolean,
}

export const useFetchTransactions = () => {
  const [transactionsResponse, setTransactionsResponse] = useState<TransactionsResponse>({
    data: [],
    error: '',
    loading: true,
  })

  useEffect(() => {
    const getTransactions = async () => {
    try{
      const response = await fetch('http://localhost:3001/history');
      const data: TTransaction[] = await response.json();

      setTransactionsResponse({
        ...transactionsResponse,
        loading: false,
        data,
      });
    } catch (e) {
      setTransactionsResponse({
        ...transactionsResponse,
        error: 'Error fetching transactions',
        loading: false,
      });
    }
  };

  getTransactions();
  }, []);

  return {...transactionsResponse};
};