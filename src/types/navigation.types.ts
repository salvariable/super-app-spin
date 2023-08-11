import {
  ACCOUNT,
  BENEFITS,
  FEED,
  HOME,
  INPUT_BALANCE,
  REDEEM_CONFIRMATION,
  SELECT_ENTITY,
  TRANSACTION_DETAILS,
  TRANSACTIONS,
  WALLET,
} from "../constants/screens"

import type { TTransaction } from './data.types';

export type TTabNavigation = {
  [HOME]: undefined;
  [BENEFITS]: undefined;
  [WALLET]: undefined;
  [ACCOUNT]: undefined;
}

export type TStackBenefits = {
  [FEED]: undefined;
  [TRANSACTIONS]: undefined;
  [TRANSACTION_DETAILS]: { transaction: TTransaction };
  [SELECT_ENTITY]: undefined,
  [INPUT_BALANCE]: { entityMin: number, entityLimit: number },
  [REDEEM_CONFIRMATION]: { transaction: TTransaction },
}