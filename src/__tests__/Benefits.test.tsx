import { describe, it, expect, beforeEach } from '@jest/globals'
import { render, screen } from '@testing-library/react-native'
import { Benefits } from '../screens/Benefits'
import ThemeProvider from '../theme/ThemeProvider'


describe('Benefits Screen', () => {

    beforeEach(() => {
        render(
            <ThemeProvider>
                <Benefits />
            </ThemeProvider>)
    })

    it('should render layout', () => {
        expect(screen.getByTestId('grid')).toBeTruthy();
    })

    it('should render sections', () => {
        expect(screen.getByTestId('promo-1-text')).toBeTruthy();
        expect(screen.getByTestId('promo-2-text')).toBeTruthy();
        expect(screen.getByTestId('promo-3-text')).toBeTruthy();
    })
})