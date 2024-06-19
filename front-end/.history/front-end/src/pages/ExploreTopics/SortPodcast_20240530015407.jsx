import React from 'react'
import podcast from '../../asset/images/podcast1.webp'

const SortPodcast = () => {
    return (
        <div className='sortP'>
            <div className='sortP-header'>
                <h2 className='heading sortP-heading'>Sort Podcast</h2>
            </div>
            <div className='sortP-list'>
                <div className='sortP-item'>
                    <img src={podcast} alt='podcast' />
                    <div className='sortP-info'>
                        <h4>Christian Sister Accept Islam | Dr. Zakir Naik</h4>
                        <span>4 days ago &bull; 15 minute</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortPodcast