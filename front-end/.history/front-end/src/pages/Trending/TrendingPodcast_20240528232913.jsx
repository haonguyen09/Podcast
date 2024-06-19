import React from 'react'
import Mic from '../../asset/images/ImageMic.png'

const TrendingPodcast = () => {
    return (
        <div className='trendingP'>
            <div className='trendingP-header'>
                <h2 className='heading trendingP-heading'>Trending Podcast</h2>
            </div>
            <div className='trendingP-main'>
                <ul className='trendingP-list'>
                    <li className='trendingP-item'>
                        <div className='trendingP-info'>
                            <h3>Don't Always Win | LifeSpring</h3>
                            <span>Podcast Episode - 1</span>
                            <span>Yahia Md Amin ( Chairman - LifeSpring Limited )</span>
                        </div>
                        <div class="trendingP-img">
                            <img src={Mic} alt='mic' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TrendingPodcast