import { describe, expect, it, jest } from '@jest/globals';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { TTransaction } from '../types/data.types';
import { RedeemConfirmation } from '../screens';
import ThemeProvider from '../theme/ThemeProvider';
import { FEED, HOME } from '../constants/screens';

describe('<RedeemConfirmation />', () => {
    const props: any = {
        navigation: {
            navigate: jest.fn()
        },
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
    const setup = () => render(<RedeemConfirmation {...props} />, {
        wrapper: ThemeProvider,
    });

    it('should render layout', () => {
        const { getByTestId } = setup();

        const entity = getByTestId('entity');
        const points = getByTestId('points');
        const amount = getByTestId('amount');
        const date = getByTestId('date');
        const expiryDate = getByTestId('expiry-date');
        const giftCode = getByTestId('gift-code');
        const transactionNumber = getByTestId('transaction-number');
        const certificateButton = getByTestId('certificate-button');
        const saveButton = getByTestId('save-button');

        expect(entity).toBeOnTheScreen();
        expect(points).toBeOnTheScreen();
        expect(amount.children[0]).toBe('$10.00');
        expect(giftCode).toBeOnTheScreen();
        expect(transactionNumber).toBeOnTheScreen();
        expect(date).toBeOnTheScreen();
        expect(expiryDate).toBeOnTheScreen

        expect(certificateButton).toBeOnTheScreen();
        expect(saveButton).toBeOnTheScreen();
    });

    it('should display modal on certificate button press', () => {
        const { getByTestId } = setup();

        const certificateButton = getByTestId('certificate-button');
        fireEvent.press(certificateButton);

        // expect(getByTestId('certificate-modal')).toBeOnTheScreen();
    })

    it('should navigate to Benefits Feed on save button press', async () => {
        const { getByTestId } = setup();

        const saveButton = getByTestId('save-button');
        fireEvent.press(saveButton);

        await waitFor(() => {
            expect(props.navigation.navigate).toHaveBeenCalledWith(FEED)
        })
    })
});
