import { PodcastCard } from '@/app/components';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'


describe('PodcastCard', () => {

    it('should render Avatar component with correct title', () => {
        const mockPodcastItem = {
            title: { label: 'Agushto Papa Podcast - Agushto LLC' },
            id: {
                label: 'https://podcasts.apple.com/us/podcast/agushto-papa-podcast/id1560925561?uo=2',
                attributes: { 'im:id': '1560925561' }
            },
            'im:artist': { label: 'Agushto LLC' },
            'im:image': [
                {
                    label: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/79/cb/a0/79cba0e5-ec9b-ef93-4e71-b008ebb5c56c/mza_531851479407142669.jpg/55x55bb.png',
                    attributes: {
                        height: '150'
                    }
                }
            ],
        }
        render(<PodcastCard item={mockPodcastItem} />);
        const avatarElement = screen.getByTestId("postCard");
        expect(avatarElement).toHaveTextContent('Agushto Papa Podcast');
    });

    it('should render Avatar component with correct Author', () => {
        const mockPodcastItem = {
            title: { label: 'Agushto Papa Podcast - Agushto LLC' },
            id: {
                label: 'https://podcasts.apple.com/us/podcast/agushto-papa-podcast/id1560925561?uo=2',
                attributes: { 'im:id': '1560925561' }
            },
            'im:artist': { label: 'Agushto LLC' },
            'im:image': [
                {
                    label: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/79/cb/a0/79cba0e5-ec9b-ef93-4e71-b008ebb5c56c/mza_531851479407142669.jpg/55x55bb.png',
                    attributes: {
                        height: '150'
                    }
                }
            ],
        }
        render(<PodcastCard item={mockPodcastItem} />);
        const avatarElement = screen.getByTestId("postCard");
        expect(avatarElement).toHaveTextContent('Agushto LLC');
    });

    it('should render Link component with correct href when item prop is defined', () => {
        const mockPodcastItem = {
            title: { label: 'Agushto Papa Podcast - Agushto LLC' },
            id: {
                label: 'https://podcasts.apple.com/us/podcast/agushto-papa-podcast/id1560925561?uo=2',
                attributes: { 'im:id': '1560925561' }
            },
            'im:artist': { label: 'Agushto LLC' },
            'im:image': [
                {
                    label: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/79/cb/a0/79cba0e5-ec9b-ef93-4e71-b008ebb5c56c/mza_531851479407142669.jpg/55x55bb.png',
                    attributes: {
                        height: '150'
                    }
                }
            ],
        }
        render(<PodcastCard item={mockPodcastItem} />);
        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveAttribute('href', `/podcast/${mockPodcastItem?.id?.attributes['im:id']}`);
    });

})