import React from 'react'
import ArrowIcon from '../../asset/icons/ArrowIcon'
import podcast from '../../asset/images/podcast1.webp'

const TopPodcast = () => {
    return (
        <div className='topPodcast'>
            <div className='topPodcast-header d-flex justify-content-between'>
                <h2 className='heading topPodcast-heading text-start'>Top 8 Podcast</h2>
                <div className='topPodcast-view d-flex align-items-center'>
                    <span>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
            <div className='topPodcast-main d-grid'>
                <img src={ podcast } alt='podcast'/>
                <img src={ podcast } alt='podcast'/>
                <img src={ podcast } alt='podcast'/>
                <img src={ podcast } alt='podcast'/>
                <img src={ podcast } alt='podcast'/>
                <img src={ podcast } alt='podcast'/>
            </div>
        </div>
    )
}

export default TopPodcast
