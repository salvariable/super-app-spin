
import { describe, expect, it, jest } from '@jest/globals';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { AppContext } from '../context/AppContext';
import ThemeProvider from '../theme/ThemeProvider';
import { ACCOUNT, HOME } from '../constants/screens';
import Account from '../screens/Account';
import { Alert } from 'react-native';

describe('<Account />', () => {
    const props: any = {
        navigation: {
            navigate: jest.fn()
        },
    }
    const balancePoints = 1234;
    const setup = () => render(
        <AppContext.Provider value={{ balancePoints }}>
            <ThemeProvider>
                <Account {...props} />
            </ThemeProvider>
        </AppContext.Provider>
    );

    it('should render layout', () => {
        const { getByTestId } = setup();

        const name = getByTestId('name');
        const points = getByTestId('points');
        const button = getByTestId('end-session-button');

        expect(name).toBeOnTheScreen();
        expect(points).toHaveTextContent(balancePoints.toString());
        expect(button).toBeOnTheScreen();
    });

    it('should navigate after confirm ending session', async () => {
        const { getByTestId } = setup();
        const spyAlert = jest.spyOn(Alert, 'alert');

        const button = getByTestId('end-session-button');
        fireEvent.press(button);

        expect(Alert.alert).toHaveBeenCalled();

        await waitFor(() => {
            spyAlert.mock.calls[0][2]?.[0].onPress?.();
            expect(props.navigation.navigate).toHaveBeenCalledWith(HOME);
        })
    })

    it('should stay in same screen if confirmation alert gets discarded', async () => {
        const { getByTestId } = setup();
        const spyAlert = jest.spyOn(Alert, 'alert');

        const button = getByTestId('end-session-button');
        fireEvent.press(button);

        expect(Alert.alert).toHaveBeenCalled();

        await waitFor(() => {
            spyAlert.mock.calls[0][2]?.[1].onPress?.();
            expect(props.navigation.navigate).toHaveBeenCalledWith(ACCOUNT);
        })
    })
});
