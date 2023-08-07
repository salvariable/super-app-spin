export type TUser = {
    firstName: string;
    lastName: string;
    points: string;
    avatar: string;
}

export type TOperationType = 'redeemed' | 'earned';

export type TTransaction = {
    entity: string;
    date: string;
    points: number;
    operation: IOperationType;
    transactionNo: string;
    id: number;
    amount?: number;
    expiryDate?: string;
    giftCode?: string;
}

