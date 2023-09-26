'use client'

import { Podcast } from '@/interface'
import { Avatar, Paper } from '@mui/material'
import Link from 'next/link'

interface IPodcastCard {
    item: Podcast
}

const PodcastCard = ({ item }: IPodcastCard) => {

    return (
        <Link
            href={`/podcast/${item?.id?.attributes['im:id']}`}
        >
            <Paper
                elevation={4}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 250,
                    height: 'auto',
                    maxHeight: 190,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 10,
                    marginTop: 55
                }}>
                <Avatar
                    alt="Picture of the author"
                    src={item['im:image'][2]?.label}
                    sx={{ width: 150, height: 150, position: 'relative', top: -55 }}
                />
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        gap: 10,
                        position: 'relative',
                        top: -40
                    }}
                >
                    <b
                        style={{
                            fontSize: 14,
                            textTransform: 'uppercase',
                            textAlign: 'center'
                        }}
                    >{item?.title?.label?.split(' - ')[0]?.length > 30 ? item?.title?.label?.split(' - ')[0]?.substring(0, 30) + '...' : item?.title?.label?.split(' - ')[0]}</b>
                    <p
                        style={{
                            color: '#4f4f4f',
                            fontSize: 12,
                            textAlign: 'center'
                        }}
                    >Author: {item['im:artist']?.label}</p>
                </div>
            </Paper>
        </Link>
    )
}

export default PodcastCard