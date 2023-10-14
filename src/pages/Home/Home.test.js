import { advertiseRoute } from 'routes';
import Home from '.';
import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event';

jest.mock('services/__mocks__/categories.js')

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

afterEach(() => {
    jest.restoreAllMocks();
});

describe('Home page', () => {
    test('if categories are rendered correctly', async () => {
        render(<Home />);
        const categories = await screen.findAllByTestId('home-categories');

        expect(categories).toHaveLength(2);
    });

    test('Redirect to advertise page', () => {
        render(<Home />);
        const button = screen.getByTestId('home-botao-anunciar');

         userEvent.click(button);

         expect(mockNavigate).toHaveBeenCalledWith(`/${advertiseRoute}`);
    });
});