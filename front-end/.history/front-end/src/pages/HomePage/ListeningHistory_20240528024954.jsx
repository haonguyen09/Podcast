import React from 'react'
import ArrowIcon from '../../asset/icons/ArrowIcon'
import podcast from '../../asset/images/podcast1.webp'

const ListeningHistory = () => {
    return (
        <div className='history'>
            <div className='topPodcast-header d-flex justify-content-between'>
                <h2 className='heading topPodcast-heading text-start'>Top 8 Podcast</h2>
                <div className='topPodcast-view d-flex align-items-center justify-content-center'>
                    <span className='view'>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
        </div>
    )
}

export default ListeningHistory
