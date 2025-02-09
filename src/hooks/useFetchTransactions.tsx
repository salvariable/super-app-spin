import { useEffect, useState } from 'react';

import type { TTransaction } from '../types/data.types';

import { getTransactions } from '../api/transactions';

type TransactionsResponse = {
  data: TTransaction[];
  error: string;
  loading: boolean;
};

export const useFetchTransactions = () => {
  const [transactionsResponse, setTransactionsResponse] =
    useState<TransactionsResponse>({
      data: [],
      error: '',
      loading: true,
    });

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data, status } = await getTransactions();

        if (status !== 200) {
          throw new Error('Error fetching transactions');
        }

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

    fetchTransactions();
  }, []);

  return { ...transactionsResponse };
};
