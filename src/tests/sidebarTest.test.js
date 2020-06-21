import React from 'react';
import { render } from '@testing-library/react';
import SideBar from '../components/sideBar';

describe('sidebar labels desting', () => {
    test('Breed renders', () => {
        const { getByText } = render(<SideBar />);
        const element = getByText("Breed:");
        expect(element).toBeInTheDocument();
    });
});