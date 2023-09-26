import { getPodcasts } from '@/services'
import { Podcasts } from './components'

const Home = async () => {
  const PodcastsList = await getPodcasts()

  return <Podcasts PodcastsList={PodcastsList} />
}

export default Home