import React, { useState } from 'react'
import imgList from '../../asset/images/podcast1.webp'
import audio from '../../asset/podcasts/Podcast English - Luyện Nghe Tiếng Anh Mỗi Ngày - No.49.mp4'
import PodcastItemComponent from '../../components/PodcastItemComponent'
import PlayIcon from '../../asset/icons/PlayIcon'
import HeartIcon from '../../asset/icons/HeartIcon'
import StarIcon from '../../asset/icons/StarIcon'
import PlaylistIcon from '../../asset/icons/PlaylistIcon'
import { useLocation } from 'react-router-dom'

const PLayListShow = () => {

    const location = useLocation()
    const data = location.state
    console.log("data", data)

    const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

    const handleAudioItemClick = (index) => {
        setCurrentAudioIndex(index); 
    };

    return (
        <div className='playlistShow'>
        <div className='playlist-header text-start'>
            <h2 className='heading playlist-heading'>Playlist</h2>
            <span>Hear your own playlists and the playlists you’ve liked</span>
        </div>
        <div className='playlistShow-list d-grid'>
            <div className='playlistShow-item d-flex align-items-center'>
                <img src={`/uploads/${data[0].image}`} alt='img' />
                <div className='playlistShow-info'>
                        <PodcastItemComponent audioUrl={`/uploads/${data[0].audio}`} classWave='playlistShow-width' data={ data[0] } />
                        <div className='playlistShow-listPodcast d-grid'>
                            {
                                data.map((item, index) => (
                                    <div className='playlistShow-itemPodcast d-flex align-items-center justify-content-between' key={index}>
                                        <div className='playlistShow-itemPodcast-info d-flex align-items-center'>
                                            <img src={`/uploads/${item.image}`} alt='img' />
                                            <h4>{item.title}</h4>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <PlayIcon />
                                            <span>{item.viewsCount}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='playlistShow-footer d-flex align-items-center justify-content-between'>
                            <button className='button'>View 100+ Episodes</button>
                            <div className='exploreItem-action-left d-flex align-items-center'>
                                <HeartIcon />
                                <StarIcon className='exploreItem-stars'/>
                                <PlaylistIcon/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PLayListShow
