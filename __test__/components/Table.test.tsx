import CustomizedTables from '@/app/components/Table';
import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'


describe('Table', () => {

    it('should render a table with 3 columns', () => {
        render(<CustomizedTables data={{
            resultCount: 0,
            results: [],
        }} podcastId="123" />);
        const table = screen.getByRole('table');
        const headers = within(table).getAllByRole('columnheader');
        expect(headers).toHaveLength(3);
    });

    it('should render a row for each episode in the data', () => {
        const data = {
            resultCount: 2,
            results: [
                { trackId: 1, trackName: 'Episode 1', releaseDate: '2022-01-01', trackTimeMillis: 600000 },
                { trackId: 2, trackName: 'Episode 2', releaseDate: '2022-01-02', trackTimeMillis: 900000 },
            ]
        };
        render(<CustomizedTables data={data} podcastId="123" />);
        const table = screen.getByRole('table');
        const rows = within(table).getAllByRole('row');

        expect(rows).toHaveLength(2); // Including header row
    });

    it('should render a link to each episode', () => {
        const data = {
            resultCount: 2,
            results: [
                { trackId: 1, trackName: 'Episode 1', releaseDate: '2022-01-01', trackTimeMillis: 600000 },
                { trackId: 2, trackName: 'Episode 2', releaseDate: '2022-01-02', trackTimeMillis: 900000 },
            ]
        };
        render(<CustomizedTables data={data} podcastId="123" />);
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(1);
    });

    it('should render no rows when data is empty', () => {
        const data = {
            resultCount: 0,
            results: []
        };
        render(<CustomizedTables data={data} podcastId="123" />);
        const table = screen.getByRole('table');
        const rows = within(table).getAllByRole('row');

        expect(rows).toHaveLength(2); // Only header row and no data row
    });

    it('should render no data rows when data is empty', () => {
        const data = {
            resultCount: 0,
            results: []
        };
        render(<CustomizedTables data={data} podcastId="123" />);
        const text = screen.getByText(/No data/i);
        expect(text).toHaveTextContent('No data');

    });

})