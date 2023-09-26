import { InputFilter } from '@/app/components';
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"; 

describe('InputFilter', () => {

    it('should render a div with a Chip and a TextField', () => {
        render(<InputFilter filteredPodcasts={[]} filter="" setFilter={() => { }} />);
        expect(screen.getByTestId('textbox')).toBeInTheDocument();
    });

    it('should have a TextField with placeholder prop "Filter podcasts..."', () => {
        render(<InputFilter filteredPodcasts={[]} filter="" setFilter={() => { }} />);
        expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Filter podcasts...');
    });

    it('should have a Chip with label "0" when filteredPodcasts is an empty array', () => {
        render(<InputFilter filteredPodcasts={[]} filter="" setFilter={() => { }} />);
        expect(screen.getByRole('button')).toHaveTextContent('0');
    });

    it('should have a TextField with an empty value when filter is an empty string', () => {
        render(<InputFilter filteredPodcasts={[]} filter="" setFilter={() => { }} />);
        expect(screen.getByPlaceholderText('Filter podcasts...')).toHaveValue('');
    });

})