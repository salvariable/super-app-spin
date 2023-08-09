// Test 2: 
// Renders modal when text button is pressed

// Test 3: 
// Callback is called when icon button is pressed

// Test 4: 
// Callback is called when filled button is pressed

// Test 5: 
// Callback is called when contained button is pressed

// Test 6: 
// Modal is visible, changes input from empty to full, and button function is called

import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react-native';

import { TTransaction } from '../types/data.types';
import { RedeemConfirmation } from '../screens';

describe('<RedeemConfirmation />', () => {
    const props: any = {
        route: {
            params: {
                transaction: {
                    entity: 'Oxxo Gas',
                    date: 'Sun Aug 06 2023',
                    expiryDate: "Fri Sep 01 2023",
                    points: 100,
                    operation: 'earned',
                    transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
                    giftCode: "42738499092812008",
                    id: 1,
                } as TTransaction
            }
        }
    }
    const setup = () => render(<RedeemConfirmation {...props} />);

    it('should render layout', () => {
        const { getByTestId } = setup();

        const entity = getByTestId('entity');
        const points = getByTestId('points');
        const amount = getByTestId('amount');
        const date = getByTestId('date');
        const expiryDate = getByTestId('expiry-date');
        const giftCode = getByTestId('gift-code');
        const transactionNumber = getByTestId('transaction-number');

        expect(entity).toBeOnTheScreen();
        expect(points).toBeOnTheScreen();
        expect(amount.children[0]).toBe('$10.00');
        expect(giftCode).toBeOnTheScreen();
        expect(transactionNumber).toBeOnTheScreen();
        expect(date).toBeOnTheScreen();
        expect(expiryDate).toBeOnTheScreen
    });
});
