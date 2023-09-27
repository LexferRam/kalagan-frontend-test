import { Paper } from '@mui/material'
import CustomizedTables from '@/app/components/Table'
import { getPodcastEpisodes, getPodcasts } from '@/services'
import { PodcastCardDescription } from '@/app/components'
import { Podcast } from '@/interface'
import styles from './page.module.css'

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
        <div className={styles.podcastPageContainer} >
            <PodcastCardDescription currentPodcast={currentPodcast} />
            <div className={styles.episodesContainer}>
                <div>
                    <Paper elevation={4} className={styles.episodesCountContainer}>
                        <h4>Episodes: {podcastEpisodes?.results?.length}</h4>
                    </Paper>
                    <CustomizedTables data={podcastEpisodes} podcastId={params?.podcastId} />
                </div>
            </div>
        </div>
    )
}

export default page