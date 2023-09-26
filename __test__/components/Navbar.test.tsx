import ResponsiveAppBar from '@/app/components/Navbar'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

 
describe('ResponsiveAppBar', () => {

  it('should display Link to homepage with correct text', () => {
    render(<ResponsiveAppBar />);
    const link = screen.getAllByRole('link', { name: /Podcaster/i });
    expect(link).toHaveLength(2);
  });

  it('should render heading with correct text', () => {
    render(<ResponsiveAppBar />);
    const heading = screen.getAllByText(/podcaster/i);
    expect(heading).toHaveLength(2);
  });

  it('should render AppBar with white background and fixed position', () => {
    render(<ResponsiveAppBar />);
    const appBar = screen.getByRole('toolbar');
    expect(appBar).toBeInTheDocument();
    expect(appBar).toHaveStyle({ backgroundColor: 'white', position: 'fixed' });
  });

})