import { Paper } from '@mui/material'
import CustomizedTables from '@/app/components/Table'
import { getPodcastEpisodes, getPodcasts } from '@/services'
import { PodcastCardDescription } from '@/app/components'
import { Podcast } from '@/interface'

interface IPodcastPage {
    params: {
        podcastId: string
    }
}

const page = async ({ params }: IPodcastPage) => {

    const data = await getPodcasts()
    const currentPodcast: Podcast = data?.filter((itemPodcast: Podcast) => itemPodcast?.id?.attributes['im:id'] === params?.podcastId)[0]
    const podcastEpisodes = await getPodcastEpisodes(params?.podcastId)

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
            }}
        >
            <PodcastCardDescription currentPodcast={currentPodcast} />
            <div style={{ margin: 20, width: '65%' }}>
                <div>
                    <Paper elevation={4} style={{ padding: 20, width: '100%', marginBottom: 12 }}>
                        <h4>Episodes: {podcastEpisodes?.results?.length}</h4>
                    </Paper>
                    <CustomizedTables data={podcastEpisodes} podcastId={params?.podcastId} />
                </div>
            </div>
        </div>
    )
}

export default page