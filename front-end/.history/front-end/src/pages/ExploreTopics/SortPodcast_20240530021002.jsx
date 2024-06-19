import React from 'react'
import podcast from '../../asset/images/podcast1.webp'

const SortPodcast = () => {
    return (
        <div className='sortP'>
            <div className='sortP-header'>
                <h2 className='heading sortP-heading text-start'>Sort Podcast</h2>
            </div>
            <div className='sortP-list'>
                <div className='sortP-item d-flex align-items-center'>
                    <img src={podcast} alt='podcast' />
                    <div className='sortP-info text-start'>
                        <h4>Christian Sister Accept Islam | Dr. Zakir Naik</h4>
                        <span>4 days ago &bull; 15 minute</span>
                    </div>
                </div>
                <div className='sortP-item d-flex align-items-center'>
                    <img src={podcast} alt='podcast' />
                    <div className='sortP-info text-start'>
                        <h4>Christian Sister Accept Islam | Dr. Zakir Naik</h4>
                        <span>4 days ago &bull; 15 minute</span>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className='button width-full margin-block-30'>See More</button>
            </div>
        </div>
    )
}

export default SortPodcast