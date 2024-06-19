import React from 'react'
import ArrowIcon from '../../asset/icons/ArrowIcon'
import podcast from '../../asset/images/podcast1.webp'

const TopPodcast = () => {
    return (
        <div className='topPodcast'>
            <div className='topPodcast-header'>
                <h2 className='heading topPodcast-heading text-start'>Top 8 Podcast</h2>
                <div className='topPodcast-view'>
                    <span>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
            <div className='topPodcast-main'>
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
