import React from 'react'

const FeedItemComponent = () => {
    return (
        <>
            <div className='feed-item-content d-flex justify-content-between align-items-start'>
                        <img src={img} className='feed-podcast-img' />
                        <div className='feed-podcast-info'>
                            <div className='feed-podcast-header d-flex justify-content-between align-items-center'>
                                <p>Perspective Podcast (Ep. 1)</p>
                                <ShareIcon/>
                            </div>
                            <h3 className='text-start'>Philosophy vs Religion vs Science: Yahia Amin and Sadman Sadik</h3>
                            <div className='feed-podcast-time d-flex align-items-center'>
                                <div className='feed-podcast-date'>
                                    <TimeIcon/>
                                    <span>11 dayes ago</span>
                                </div>
                                <div className='feed-podcast-minus'>
                                    <TimerIcon/>
                                    <span>45mins 10 Sec</span>
                                </div>
                            </div>
                            <p className='text-start'>Play Philosophy vs Religion vs Science: Perspective Podcast (Ep. 1) | Yahia Amin and Sadman Sadik by PERSPECTIVE with Yahia Amin on desktop and mobile. Play over 265 million tracks for...</p>
                        </div>
                    </div>
                    <div className='feed-item-footer d-flex justify-content-between align-items-center'>
                        <div className='feed-footer-action d-flex justify-content-center align-items-center'>
                            <HeartIcon />
                            <StarIcon />
                            <PlaylistIcon/>
                        </div>
                        <button className='button button--primary'>
                            <PlayIcon />
                            Play Episode
                        </button>
                    </div>
        </>
    )
}

export default FeedItemComponent
