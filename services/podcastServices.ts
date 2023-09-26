export const getPodcasts = async () => {
  try {
    const podcastResp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`,
      {
        next: {
          revalidate: 86400 // revalidate after 1 day ==>  ISR
        }
      }
    )
    const podcastList = await podcastResp.json()
    return podcastList.feed?.entry
  } catch (error) {
    console.error(error)
  }
}

export const getPodcastEpisodes = async (podcastId: string) => {
  try {
    const PodcastEpisodesResp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
      {
        next: {
          revalidate: 86400 // revalidate after 1 day ==>  ISR
        }
      }
    )
    const PodcastEpisodesList = await PodcastEpisodesResp.json()

    return PodcastEpisodesList
  } catch (error) {
    console.error(error)
  }
}