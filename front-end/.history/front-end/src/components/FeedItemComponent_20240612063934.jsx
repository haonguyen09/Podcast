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
import { createLike, getAllLike, updateLike } from '../services/LikeService'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { createRate, getAllRate, updateRate } from '../services/RateService'
import ModelCreatePlaylist from './ModelCreatePlaylist'


const FeedItemComponent = (props) => {
    const { data } = props
    console.log("podcast", data)
    const user = useSelector(state => state.user)
    const token = user?.access_token
    const decoded = jwtDecode(token)
    console.log("userId", decoded.id)

    const [likesCount, setLikesCount] = useState(data.likesCount || 0);
    const [isLiked, setIsLiked] = useState(false);
    const [hasLiked, setHasLiked] = useState(false);
    const [ratingCount, setRatingCount] = useState(data.ratingCount || 0);
    const [isRating, setIsRating] = useState(false);
    const [hasRated, setHasRated] = useState(false);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        const fetchInitialStatus = async () => {
            if (token) {
                try {
                    const statusLike = await getAllLike()
                    console.log("statusLike", statusLike)
                    const checkLike = statusLike.data.find(item => item.userId._id === decoded.id && item.podcastId._id === data._id)
                    console.log("checkLike", checkLike)
                    if (checkLike) {
                        setHasLiked(true)
                        setIsLiked(checkLike.isLike)
                    }

                    const statusRate = await getAllRate()
                    console.log("statusRate", statusRate)
                    const checkRate = statusRate.data.find(item => item.userId._id === decoded.id && item.podcastId._id === data._id)
                    console.log("checkRate", checkRate)
                    if (checkRate) {
                        setHasRated(true)
                        setIsRating(checkRate.isRating)
                    }
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchInitialStatus()
    }, [token, data, decoded.id])


    const formatTime = (duration) => {
        const mins = Math.floor(duration / 60);
        const secs = duration % 60;
        return `${mins} mins ${secs} sec`;
    }

    const handleLikeClick = async () => {
        const newIsLiked = !isLiked;
        setIsLiked(newIsLiked);
        setLikesCount(prev => newIsLiked ? prev + 1 : prev - 1);

        try {
            if (hasLiked) {
                await updateLike({ userId: decoded.id, podcastId: data._id, isLike: newIsLiked });
            } else {
                await createLike({ userId: decoded.id, podcastId: data._id, isLike: newIsLiked });
                setHasLiked(true);
            }
            await updatePodcast(data._id, { likesCount: newIsLiked ? likesCount + 1 : likesCount - 1 });
        } catch (error) {
            console.error('Error updating like', error);
        }
    };

    const handleRatingClick = async () => {
        const newIsRating = !isRating;
        setIsRating(newIsRating);
        setRatingCount(prev => newIsRating ? prev + 1 : prev - 1);

        try {
            if (hasRated) {
                await updateRate({ userId: decoded.id, podcastId: data._id, isRating: newIsRating });
            } else {
                await createRate({ userId: decoded.id, podcastId: data._id, isRating: newIsRating });
                setHasRated(true);
            }
            await updatePodcast(data._id, { ratingCount: newIsRating ? ratingCount + 1 : ratingCount - 1 });
        } catch (error) {
            console.error('Error updating rating', error);
        }
    };

    const handlePlaylistClick = async () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
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
            <ModelCreatePlaylist
                showModal={showModal}
                handleClose={handleCloseModal}
            />
        </>
    )
}

export default FeedItemComponent
