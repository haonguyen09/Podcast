import React from 'react'
import img from '../asset/images/podcast1.webp'
import TimeIcon from '../asset/icons/TimeIcon'
import TimerIcon from '../asset/icons/TimerIcon'
import ShareIcon from '../asset/icons/ShareIcon'
import HeartIcon from '../asset/icons/HeartIcon'
import StarIcon from '../asset/icons/StarIcon'
import PlaylistIcon from '../asset/icons/PlaylistIcon'
import PlayIcon from '../asset/icons/PlayIcon';

const FeedItemComponent = (props) => {
    const { data } = props
    console.log("podcast", data)
    return (
        <>
            <div className='feed-item-content d-flex justify-content-between align-items-start'>
                        <img src={`/uploads/${podcast.image}`} className='feed-podcast-img' />
                        <div className='feed-podcast-info'>
                            <div className='feed-podcast-header d-flex justify-content-between align-items-center'>
                                <p>Perspective Podcast (Ep. 1)</p>
                                <ShareIcon/>
                            </div>
                            <h3 className='text-start'>{podcast.title}</h3>
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
                        <p className='text-start'>{podcast.description}</p>
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