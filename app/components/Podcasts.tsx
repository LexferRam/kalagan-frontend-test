'use client'

import React, { useState } from 'react'
import styles from '../page.module.css'
import { InputFilter, PodcastCard } from '.'
import { Podcast } from '@/interface'

interface IPodcasts {
    PodcastsList: Podcast[]
}

const Podcasts = ({ PodcastsList }: IPodcasts) => {

    const [filter, setFilter] = useState('')

    let filteredPodcasts = PodcastsList.filter((element: Podcast) => filter !== ''
        ? element.title.label.toLowerCase().includes(filter.toLowerCase())
        || element['im:artist'].label.toLowerCase().includes(filter.toLowerCase())
        : element)

    return (
        <div
            style={{
                margin: 40
            }}
        >
            <InputFilter
                filteredPodcasts={filteredPodcasts}
                filter={filter}
                setFilter={setFilter}
            />
            <div className={styles.page_container}>
                {filteredPodcasts.map((item: Podcast) => (
                    <PodcastCard key={item.id.attributes['im:id']} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Podcasts