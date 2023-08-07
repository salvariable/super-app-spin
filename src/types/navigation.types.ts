import { ACCOUNT, BENEFITS, FEED, HOME, TRANSACTIONS, TRANSACTION_DETAILS, WALLET } from "../constants/screens"

export type TTabNavigation = {
    [HOME]: undefined;
    [BENEFITS]: undefined;
    [WALLET]: undefined;
    [ACCOUNT]: undefined;
}

export type TStackBenefits = {
    [FEED]: undefined;
    [TRANSACTIONS]: undefined;
    [TRANSACTION_DETAILS]: undefined;
}