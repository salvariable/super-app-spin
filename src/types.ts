export type IUser = {
    firstName: string;
    lastName: string;
    points: string;
    avatar: string;
}

export type IOperationType = 'redeemed' | 'earned';

export type ITransaction = {
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

 