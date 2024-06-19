import React from 'react'
import podcast from '../../asset/images/podcast1.webp'
import AudioPlayerChart from '../../components/AudioPlayerChart'

const TrendingEpisdes = () => {
    return (
        <div className='trendingE'>
            <div className='trendingE-header'>
                <h2 className='heading trendingE-heading text-start'>Trending episdes</h2>
                <span>The Most Popula Podcast episodes overall now. Last updated 2 hours ago</span>
            </div>
            <div className='trendingE-main d-grid'>
                <div className='trendingE-item'>
                    <div className='trendingE-img'>
                        <img src={podcast} alt='img'/>
                    </div>
                    <div className='trendingE-info'>
                        <h4>SHOULD I MIGRATE?</h4>
                        <span>Perspective Podcast </span>
                        <div className='trendingE-played'>
                            <span>1.2k Played</span>
                            <span>1 week ago</span>
                        </div>
                        <div className='trendingE-author'>
                            <img src={podcast} alt='avatar' />
                            <div className='trendingE-author-info'>
                                <h5>Thomas L. Fletcher</h5>
                                <span>@thomaslfletcher</span>
                            </div>
                        </div>
                        <div className='trendingE-action'>
                            <AudioPlayerChart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingEpisdes