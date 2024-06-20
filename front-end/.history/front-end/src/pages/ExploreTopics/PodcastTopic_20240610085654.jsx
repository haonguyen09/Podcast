import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import podcast from '../../asset/images/podcast1.webp'
import PodcastItemComponent from '../../components/PodcastItemComponent';
import audio from '../../asset/podcasts/Podcast English - Luyện Nghe Tiếng Anh Mỗi Ngày - No.49.mp4'
import HeartIcon from '../../asset/icons/HeartIcon';
import StarIcon from '../../asset/icons/StarIcon';
import PlaylistIcon from '../../asset/icons/PlaylistIcon';
import PlayIcon from '../../asset/icons/PlayIcon';
import SortPodcast from './SortPodcast';
import { useLocation } from 'react-router-dom';

const PodcastTopic = () => {

    const location = useLocation()
    const data = location.state.topic.podcasts
    console.log("data", data)

    return (
        <div className='exploreItem'>
            <Breadcrumb>
                <Breadcrumb.Item href="#">explore-topics</Breadcrumb.Item>
                <Breadcrumb.Item active>religion</Breadcrumb.Item>
            </Breadcrumb>
            <div className='exploreItem-header text-start'>
                <h2 className='heading exploreItem-heading'>Popular Religion & Spirituality podcast episodes</h2>
                <span>Most listend to podcast</span>
            </div>
            <div className='exploreItem-main d-grid'>
                <div className='exploreItem-list'>
                    {
                        data.map((item, index) => (
                            <div className='exploreItem-item d-flex align-items-center justify-content-between'>
                                <img src={`${process.env.REACT_APP_BACKEND}/uploads/${item.image}`} alt='podcast' />
                                <div className='exploreItem-action'>
                                    <PodcastItemComponent audioUrl={`${process.env.REACT_APP_BACKEND}/uploads/${item.audio}`} classWave='podcastItem-wave' />
                                    <div className='exploreItem-action-item d-flex align-items-center justify-content-between'>
                                        <div className='exploreItem-action-left d-flex align-items-center'>
                                            <HeartIcon />
                                            <StarIcon className='exploreItem-stars'/>
                                            <PlaylistIcon/>
                                        </div>
                                        <div className='exploreItem-action-right'>
                                            <PlayIcon />
                                            <span>{item.viewsCount}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className='exploreItem-item d-flex align-items-center justify-content-between'>
                        <img src={podcast} alt='podcast' />
                        <div className='exploreItem-action'>
                            <PodcastItemComponent audioUrl={audio} classWave='podcastItem-wave'/>
                            <div className='exploreItem-action-item d-flex align-items-center justify-content-between'>
                                <div className='exploreItem-action-left d-flex align-items-center'>
                                    <HeartIcon />
                                    <StarIcon className='exploreItem-stars'/>
                                    <PlaylistIcon/>
                                </div>
                                <div className='exploreItem-action-right'>
                                    <PlayIcon />
                                    <span>1.5k</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <SortPodcast/>
            </div>
        </div>
    )
}

export default PodcastTopic
