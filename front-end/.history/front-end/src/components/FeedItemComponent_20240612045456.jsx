import React, { useEffect, useState } from 'react'
import img from '../asset/images/podcast1.webp'
import TimeIcon from '../asset/icons/TimeIcon'
import TimerIcon from '../asset/icons/TimerIcon'
import ShareIcon from '../asset/icons/ShareIcon'
import HeartIcon from '../asset/icons/HeartIcon'
import StarIcon from '../asset/icons/StarIcon'
import PlaylistIcon from '../asset/icons/PlaylistIcon'
import PlayIcon from '../asset/icons/PlayIcon';
import { remainingTime } from '../utils/remainingTime'
import { updatePodcast } from '../services/PodcastService'
import { createLike } from '../services/LikeService'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { createRate } from '../services/RateService'

const FeedItemComponent = (props) => {
    const { data } = props
    console.log("podcast", data)
    const user = useSelector(state => state.user)
    const token = user?.access_token
    const decoded = jwtDecode(token)

    const [likesCount, setLikesCount] = useState(data.likesCount || 0);
    const [isLiked, setIsLiked] = useState(false);
    const [ratingCount, setRatingCount] = useState(data.ratingCount || 0);
    const [isRating, setIsRating] = useState(false);


    useEffect(() => {
        const fetchListPodcast = async () => {
            if (token) {
                try {
                    
                    // const response = await getDetailsUser(decoded?.id)
                    // const listTopic = response.data.topics.flatMap(topic => topic.podcasts)
                    // console.log("listTopic", listTopic)
                    // setListPodcast(listTopic)
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchListPodcast()
    }, [token])


    const formatTime = (duration) => {
        const mins = Math.floor(duration / 60);
        const secs = duration % 60;
        return `${mins} mins ${secs} sec`;
    }

    const handleLikeClick = async() => {
        setIsLiked(!isLiked);
        setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
        await updatePodcast(data._id, { likesCount: likesCount })
        await createLike({userId: decoded.id, podcastId: data._id, isLike: true})
    };

    const handleRatingClick = async() => {
        setIsRating(!isRating);
        setRatingCount(prev => isRating ? prev - 1 : prev + 1);
        await updatePodcast(data._id, { ratingCount: ratingCount })
        await createRate({userId: decoded.id, podcastId: data._id, isRating: true})
    };

    const handlePlaylistClick = async () => {
        
    }


    return (
        <>
            <div className='feed-item-content d-flex justify-content-between align-items-start'>
                        <img src={data?`${process.env.REACT_APP_BACKEND}/uploads/${data.image}`:""} className='feed-podcast-img' />
                        <div className='feed-podcast-info'>
                            <div className='feed-podcast-header d-flex justify-content-between align-items-center'>
                                <p>Perspective Podcast (Ep. 1)</p>
                                <ShareIcon/>
                            </div>
                            <h3 className='text-start'>{data?`${data.title}`:""}</h3>
                            <div className='feed-podcast-time d-flex align-items-center'>
                                <div className='feed-podcast-date'>
                                    <TimeIcon/>
                                    <span>{data?`${remainingTime(data.createdAt)}`:""}</span>
                                </div>
                                <div className='feed-podcast-minus'>
                                    <TimerIcon/>
                                    <span>{data?`${formatTime(data.duration)}`:""}</span>
                                </div>
                            </div>
                        <p className='text-start'>{data?`${data.description}`:""}</p>
                        </div>
                    </div>
                    <div className='feed-item-footer d-flex justify-content-between align-items-center'>
                        <div className='feed-footer-action d-flex justify-content-center align-items-center'>
                            <HeartIcon isLiked={isLiked} onClick={handleLikeClick} />
                            <StarIcon isRating={isRating} onClick={handleRatingClick}/>
                            <PlaylistIcon onClick={handlePlaylistClick}/>
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
