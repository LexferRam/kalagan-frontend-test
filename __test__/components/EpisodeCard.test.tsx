import { EpisodeCard } from '@/app/components';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

const currentEpisode = {
    trackName: 'Episode 1',
    description: 'This is episode 1',
    previewUrl: 'https://example.com/episode1.mp3'
};

describe('EpisodeCard', () => {

    it('should render the component with the correct props', () => {
        // Act
        render(<EpisodeCard currentEpisode={currentEpisode} />);

        // Assert
        // Check if the component is rendered with the correct props
        expect(screen.getByText('Episode 1')).toBeInTheDocument();
        expect(screen.getByText('This is episode 1')).toBeInTheDocument();
        expect(screen.getByRole('audio')).toHaveAttribute('src', 'https://example.com/episode1.mp3');
    });

    it('should display the episode description', () => {
        // Act
        render(<EpisodeCard currentEpisode={currentEpisode} />);

        // Assert
        expect(screen.getByText('This is episode 1')).toBeInTheDocument();
    });

    it('should render the audio component', () => {
        // Act
        render(<EpisodeCard currentEpisode={currentEpisode} />);

        // Assert
        // Check if the component is rendered without any errors
        expect(screen.getByRole('audio')).toBeInTheDocument();
    });

})