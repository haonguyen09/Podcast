import React, { useEffect, useRef, useState } from 'react'
import podcast from '../../asset/images/podcast1.webp'
import audio from '../../asset/podcasts/Podcast English - Luyện Nghe Tiếng Anh Mỗi Ngày - No.49.mp4'
import WaveForm from '../../components/WaveForm'
import ShareIcon from '../../asset/icons/ShareIcon'
import HeartIcon from '../../asset/icons/HeartIcon'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { getAllPodcast } from '../../services/PodcastService'
import { remainingTime } from '../../utils/remainingTime'

const TrendingEpisdes = () => {

    const user = useSelector(state => state.user)
    const token = user?.access_token

    const [listPodcast, setListPodcast] = useState([])
    const [limit, setLimit] = useState(6)
    const [status, setStatus] = useState(false)



    useEffect(() => {
        const fetchListPodcast = async () => {
            if (token) {
                try {
                    const decoded = jwtDecode(token)
                    const response = await getAllPodcast(limit, 0)
                    // console.log("response", response)
                    setListPodcast(response.data)
                    
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchListPodcast()
    }, [token, limit])

    const handleGetAll = () => {
        setStatus(!status)
        if (status) {
            setLimit(0)
        } else {
            setLimit(6)
        }
    }


    return (
        <div className='trendingE'>
            <div className='trendingE-header text-start'>
                <h2 className='heading trendingE-heading'>Trending episdes</h2>
                <span>The Most Popula Podcast episodes overall now. Last updated 2 hours ago</span>
            </div>
            <div className='trendingE-main d-grid'>
                {
                    listPodcast.map((podcast, index) => (
                        <div className='trendingE-item d-flex align-items-center' key={index}>
                            <div className='trendingE-img'>
                                <img src={`${process.env.REACT_APP_BACKEND}/uploads/${podcast.image}`} alt='img'/>
                            </div>
                            <div className='trendingE-info text-start'>
                                <h4>{ podcast.title}</h4>
                                <span>Perspective Podcast </span>
                                <div className='trendingE-played d-flex align-items-center'>
                                    <span>{`${podcast.viewsCount} Played`}</span>
                                    <span>{remainingTime(podcast.createdAt)}</span>
                                </div>
                                <div className='trendingE-author d-flex align-items-center'>
                                    <img src={podcast} alt='avatar' />
                                    <div className='trendingE-author-info'>
                                        <h5>{ `${podcast.userId.firstName}${podcast.userId.lastName}`}</h5>
                                        <span className='trendingE-author-name'>@{podcast.userId.firstName.toLowerCase()}{podcast.userId.lastName.toLowerCase()}</span>
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
                    ))
                }
            </div>
                <div class="trendingE-btn-more d-flex justify-content-center align-items-center">
                    <button className='button' onClick={handleGetAll}>
                        <span>Load More</span>
                    </button>
                </div>
        </div>
    )
}

export default TrendingEpisdes