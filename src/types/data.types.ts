export type TUser = {
  firstName: string;
  lastName: string;
  points: string;
  avatar: string;
};

export type TOperationType = 'redeemed' | 'earned';

export type TTransaction = {
  entity: string;
  date: string;
  points: number;
  operation: TOperationType;
  transactionNo: string;
  id: number;
  amount?: number;
  expiryDate?: string;
  giftCode?: string;
};

export type TEntity = {
  id: number;
  name: string;
  category: string;
  avatar: string;
};
