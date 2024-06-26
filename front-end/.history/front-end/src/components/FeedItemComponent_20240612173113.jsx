import React, { useEffect, useRef, useState } from 'react';
import img from '../asset/images/podcast1.webp';
import TimeIcon from '../asset/icons/TimeIcon';
import TimerIcon from '../asset/icons/TimerIcon';
import ShareIcon from '../asset/icons/ShareIcon';
import HeartIcon from '../asset/icons/HeartIcon';
import StarIcon from '../asset/icons/StarIcon';
import PlaylistIcon from '../asset/icons/PlaylistIcon';
import PlayIcon from '../asset/icons/PlayIcon';
import { remainingTime } from '../utils/remainingTime';
import { updatePodcast } from '../services/PodcastService';
import { createLike, getAllLike, updateLike } from '../services/LikeService';
import { useSelector } from 'react-redux';
import { createRate, getAllRate, updateRate } from '../services/RateService';
import { PlaylistModal } from './PlaylistModal';
import { jwtDecode } from 'jwt-decode';
import { ModalCreatePlaylist } from './ModalCreatePlaylist';
import { formatDuration } from '../utils/formatDuration';

const FeedItemComponent = (props) => {
    const { data } = props;
    console.log("podcast", data);
    const user = useSelector(state => state.user);
    const token = user?.access_token;
    const decoded = token ? jwtDecode(token) : null;

    const [likesCount, setLikesCount] = useState(data.likesCount || 0);
    const [isLiked, setIsLiked] = useState(false);
    const [hasLiked, setHasLiked] = useState(false);
    const [ratingCount, setRatingCount] = useState(data.ratingCount || 0);
    const [isRating, setIsRating] = useState(false);
    const [hasRated, setHasRated] = useState(false);
    const [showPlaylistModal, setShowPlaylistModal] = useState(false);
    const [showCreatePlaylistModal, setShowCreatePlaylistModal] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const fetchInitialStatus = async () => {
            if (decoded?.id) {
                try {
                    const statusLike = await getAllLike();
                    console.log("statusLike", statusLike);
                    const checkLike = statusLike.data.find(item => item.userId._id === decoded?.id && item.podcastId._id === data._id);
                    console.log("checkLike", checkLike);
                    if (checkLike) {
                        setHasLiked(true);
                        setIsLiked(checkLike.isLike);
                    }

                    const statusRate = await getAllRate();
                    console.log("statusRate", statusRate);
                    const checkRate = statusRate.data.find(item => item.userId._id === decoded?.id && item.podcastId._id === data._id);
                    console.log("checkRate", checkRate);
                    if (checkRate) {
                        setHasRated(true);
                        setIsRating(checkRate.isRating);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        };

        fetchInitialStatus();
    }, [token, data, decoded?.id]);

    const formatTime = (duration) => {
        const mins = Math.floor(duration / 60);
        const secs = duration % 60;
        return `${mins} mins ${secs} sec`;
    };

    const handleLikeClick = async () => {
        const newIsLiked = !isLiked;
        setIsLiked(newIsLiked);
        setLikesCount(prev => newIsLiked ? prev + 1 : prev - 1);

        try {
            if (hasLiked) {
                await updateLike({ userId: decoded?.id, podcastId: data._id, isLike: newIsLiked });
            } else {
                await createLike({ userId: decoded?.id, podcastId: data._id, isLike: newIsLiked });
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
                await updateRate({ userId: decoded?.id, podcastId: data._id, isRating: newIsRating });
            } else {
                await createRate({ userId: decoded?.id, podcastId: data._id, isRating: newIsRating });
                setHasRated(true);
            }
            await updatePodcast(data._id, { ratingCount: newIsRating ? ratingCount + 1 : ratingCount - 1 });
        } catch (error) {
            console.error('Error updating rating', error);
        }
    };

    const handlePlaylistClick = () => {
        setShowPlaylistModal(true);
    };

    const handleClosePlaylistModal = () => {
        setShowPlaylistModal(false);
    };

    const handleCreateNewPlaylist = () => {
        setShowPlaylistModal(false);
        setShowCreatePlaylistModal(true);
    };

    const handleCloseCreatePlaylistModal = () => {
        setShowCreatePlaylistModal(false);
    };

    const handlePlayClick = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <div className='feed-item-content d-flex justify-content-between align-items-start'>
                <img src={data ? `${process.env.REACT_APP_BACKEND}/uploads/${data.image}` : ""} className='feed-podcast-img' />
                <div className='feed-podcast-info'>
                    <div className='feed-podcast-header d-flex justify-content-between align-items-center'>
                        <p>Perspective Podcast (Ep. 1)</p>
                        <ShareIcon />
                    </div>
                    <h3 className='text-start'>{data ? `${data.title}` : ""}</h3>
                    <div className='feed-podcast-time d-flex align-items-center'>
                        <div className='feed-podcast-date'>
                            <TimeIcon />
                            <span>{data ? `${remainingTime(data.createdAt)}` : ""}</span>
                        </div>
                        <div className='feed-podcast-minus'>
                            <TimerIcon />
                            <span>{data ? `${formatDuration(data.duration)}` : ""}</span>
                        </div>
                    </div>
                    <p className='text-start'>{data ? `${data.description}` : ""}</p>
                </div>
            </div>
            <div className='feed-item-footer d-flex justify-content-between align-items-center'>
                <div className='feed-footer-action d-flex justify-content-center align-items-center'>
                    <HeartIcon isLiked={isLiked} onClick={handleLikeClick} />
                    <StarIcon isRating={isRating} onClick={handleRatingClick} />
                    <PlaylistIcon onClick={handlePlaylistClick} />
                </div>
                <button className='button button--primary' onClick={handlePlayClick}>
                    <PlayIcon />
                    {isPlaying ? 'Pause' : 'Play'} Episode
                </button>
            </div>

            <PlaylistModal
                showModal={showPlaylistModal}
                handleClose={handleClosePlaylistModal}
                userId={decoded?.id}
                podcastId={data._id}
                handleCreateNewPlaylist={handleCreateNewPlaylist}
            />

            <ModalCreatePlaylist
                showModal={showCreatePlaylistModal}
                userId={decoded?.id}
                podcastId={data._id}
                handleClose={handleCloseCreatePlaylistModal}
            />
        </>
    );
};

export default FeedItemComponent;
