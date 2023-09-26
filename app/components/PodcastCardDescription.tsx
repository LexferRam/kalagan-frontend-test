import Image from 'next/image'
import Link from 'next/link'
import { Divider, Paper } from '@mui/material'
import { Podcast } from '@/interface'

interface IPodcastCardDescription{
    currentPodcast: Podcast,
}

const PodcastCardDescription = ({currentPodcast}: IPodcastCardDescription) => {
  return (
    <div>
    <Paper
        elevation={4} 
        style={{ 
            marginTop: 20,
            marginBottom:20,
            padding: 30,
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-around',
            gap: 10, 
            maxWidth: 300
        }}>
        <Image
            src={currentPodcast['im:image'][2]?.label}
            alt="Picture of the author"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: 200, height: 200 }}
        />
        <Divider />
        <Link href={`/podcast/${currentPodcast?.id?.attributes['im:id']}`}>
            <h4 style={{color: 'black', fontWeight: 'bold'}}>
                {currentPodcast['im:name']?.label}
            </h4>
        </Link>
        <Link href={`/podcast/${currentPodcast?.id?.attributes['im:id']}`}>
            <p style={{color: 'black', fontFamily: 'cursive', textDecoration: 'none'}}>
                {currentPodcast['im:artist']?.label}
            </p>
        </Link>
        <Divider />
        <h5 >Description:</h5>
        <p style={{fontFamily: 'cursive',wordWrap: 'break-word'}}>{currentPodcast?.summary?.label}</p>
    </Paper>
</div>
  )
}

export default PodcastCardDescription