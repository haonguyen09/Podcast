import React, { useRef, useState } from 'react'
import podcast from '../../asset/images/podcast1.webp'
import audio from '../../asset/podcasts/Podcast English - Luyện Nghe Tiếng Anh Mỗi Ngày - No.49.mp4'
import WaveForm from '../../components/WaveForm'

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
                            <div className="audio-wrapper">
                                <WaveForm audioUrl={audio} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingEpisdes