import { getPodcastEpisodes, getPodcasts } from "@/services"
import { EpisodeCard, PodcastCardDescription } from "@/app/components"
import { Episode, Podcast } from "@/interface"

interface IEpisodePage {
    params: {
        podcastId: string,
        episodeId: string
    }
}

const page = async ({ params }: IEpisodePage) => {

    const data = await getPodcasts()
    const currentPodcast: Podcast = data?.filter((itemPodcast: Podcast) => itemPodcast?.id?.attributes['im:id'] === params?.podcastId)[0]

    const podcastInfo = await getPodcastEpisodes(params?.podcastId)
    const currentEpisode: Episode = podcastInfo?.results?.filter((itemEpisode: Episode) => itemEpisode?.trackId === Number(params?.episodeId))[0]

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
            <EpisodeCard currentEpisode={currentEpisode} />
        </div>
    )
}

export default page