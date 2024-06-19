import React, { useRef, useState } from 'react'
import podcast from '../../asset/images/podcast1.webp'
import audio from '../../asset/podcasts/Podcast English - Luyện Nghe Tiếng Anh Mỗi Ngày - No.49.mp4'
import WaveForm from '../../components/WaveForm'
import ShareIcon from '../../asset/icons/ShareIcon'
import HeartIcon from '../../asset/icons/HeartIcon'

const TrendingEpisdes = () => {


    return (
        <div className='trendingE'>
            <div className='trendingE-header text-start'>
                <h2 className='heading trendingE-heading'>Trending episdes</h2>
                <span>The Most Popula Podcast episodes overall now. Last updated 2 hours ago</span>
            </div>
            <div className='trendingE-main d-grid'>
                <div className='trendingE-item d-flex align-items-center'>
                    <div className='trendingE-img'>
                        <img src={podcast} alt='img'/>
                    </div>
                    <div className='trendingE-info text-start'>
                        <h4>SHOULD I MIGRATE?</h4>
                        <span>Perspective Podcast </span>
                        <div className='trendingE-played d-flex align-items-center'>
                            <span>1.2k Played</span>
                            <span>1 week ago</span>
                        </div>
                        <div className='trendingE-author d-flex align-items-center'>
                            <img src={podcast} alt='avatar' />
                            <div className='trendingE-author-info'>
                                <h5>Thomas L. Fletcher</h5>
                                <span className='trendingE-author-name'>@thomaslfletcher</span>
                            </div>
                        </div>
                        <div className='trendingE-action'>
                            <div className="audio-wrapper d-flex align-items-center justify-content-between">
                                <WaveForm audioUrl={audio} />
                                <div className="trendingE-audio-action d-flex align-items-center ">
                                    <ShareIcon />
                                    <HeartIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingEpisdes