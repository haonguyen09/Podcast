import React from 'react'
import img from '../asset/images/podcast1.webp'
import TimeIcon from '../asset/icons/TimeIcon'
import TimerIcon from '../asset/icons/TimerIcon'
import ShareIcon from '../asset/icons/ShareIcon'
import HeartIcon from '../asset/icons/HeartIcon'
import StarIcon from '../asset/icons/StarIcon'
import PlaylistIcon from '../asset/icons/PlaylistIcon'
import PlayIcon from '../asset/icons/PlayIcon';
import { remainingTime } from '../utils/remainingTime'

const FeedItemComponent = (props) => {
    const { data } = props
    console.log("podcast", data)

    const formatTime = (duration) => {
        const mins = Math.floor(duration / 60);
        const secs = duration % 60;
        return `${mins} mins ${secs} sec`;
    }


    return (
        <>
            <div className='feed-item-content d-flex justify-content-between align-items-start'>
                        <img src={`/uploads/${data.image}`} className='feed-podcast-img' />
                        <div className='feed-podcast-info'>
                            <div className='feed-podcast-header d-flex justify-content-between align-items-center'>
                                <p>Perspective Podcast (Ep. 1)</p>
                                <ShareIcon/>
                            </div>
                            <h3 className='text-start'>{data.title}</h3>
                            <div className='feed-podcast-time d-flex align-items-center'>
                                <div className='feed-podcast-date'>
                                    <TimeIcon/>
                                    <span>{remainingTime(data.createdAt)}</span>
                                </div>
                                <div className='feed-podcast-minus'>
                                    <TimerIcon/>
                                    <span>{formatTime(data.duration)}</span>
                                </div>
                            </div>
                        <p className='text-start'>{data.description}</p>
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
