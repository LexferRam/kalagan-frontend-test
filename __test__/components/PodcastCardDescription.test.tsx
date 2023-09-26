import { PodcastCardDescription } from '@/app/components';
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

const currentPodcast = {
    'im:image': [
        {
            label: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/79/cb/a0/79cba0e5-ec9b-ef93-4e71-b008ebb5c56c/mza_531851479407142669.jpg/55x55bb.png',
            attributes: {
                height: '150'
            }
        },
        {
            label: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/79/cb/a0/79cba0e5-ec9b-ef93-4e71-b008ebb5c56c/mza_531851479407142669.jpg/55x55bb.png',
            attributes: {
                height: '150'
            }
        },
        {
            label: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/79/cb/a0/79cba0e5-ec9b-ef93-4e71-b008ebb5c56c/mza_531851479407142669.jpg/55x55bb.png',
            attributes: {
                height: '150'
            }
        }
    ],
    id: {
        label: 'https://podcasts.apple.com/us/podcast/agushto-papa-podcast/id1560925561?uo=2',
        attributes: { 'im:id': '1560925561' }
    },
    'im:name': { label: 'Podcast Name' },
    'im:artist': { label: 'Artist Name' },
    summary: { label: 'Podcast Summary' },
};


describe('PodcastCardDescription', () => {

    it('should render podcast card name ', () => {
        // Act
        render(<PodcastCardDescription currentPodcast={currentPodcast} />);

        // Assert
        expect(screen.getByText('Podcast Name')).toBeInTheDocument();
    });

    it('should render podcast card artist name ', () => {
        // Act
        render(<PodcastCardDescription currentPodcast={currentPodcast} />);

        // Assert
        expect(screen.getByText('Artist Name')).toBeInTheDocument();
    });


    it('should render podcast card Summary', () => {
        // Act
        render(<PodcastCardDescription currentPodcast={currentPodcast} />);

        // Assert
        expect(screen.getByText('Podcast Summary')).toBeInTheDocument();
    });
})