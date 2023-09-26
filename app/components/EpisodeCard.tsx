import { Episode } from '@/interface'
import { Divider, Paper } from '@mui/material'
import React from 'react'

interface IEpisodeCard{
    currentEpisode: Episode
}

const EpisodeCard = ({ currentEpisode }: IEpisodeCard) => {
    return (
        <div style={{ margin: 20, width: '65%' }}>
            <div>
                <Paper
                    elevation={4}
                    style={{
                        padding: 20,
                        width: '100%',
                        marginBottom: 12,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 40
                    }}
                >
                    <h2>{currentEpisode?.trackName}</h2>
                    <div
                        style={{
                            fontFamily: 'cursive'
                        }}
                        dangerouslySetInnerHTML={{ __html: currentEpisode?.description || '' }}
                    />
                    <Divider />
                    <audio
                        src={currentEpisode?.previewUrl}
                        controls
                        style={{ width: '100%' }}
                    ></audio>
                </Paper>
            </div>
        </div>
    )
}

export default EpisodeCard