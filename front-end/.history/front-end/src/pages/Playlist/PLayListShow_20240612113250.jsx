import React from 'react'
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

    return (
        <div className='playlistShow'>
        <div className='playlist-header text-start'>
            <h2 className='heading playlist-heading'>Playlist</h2>
            <span>Hear your own playlists and the playlists you’ve liked</span>
        </div>
        <div className='playlistShow-list d-grid'>
            <div className='playlistShow-item d-flex align-items-center'>
                <img src={`${process.env.REACT_APP_BACKEND}/uploads/${data.image}`} alt='img' />
                <div className='playlistShow-info'>
                        <PodcastItemComponent audioUrl={audio} classWave='playlistShow-width'/>
                        <div className='playlistShow-listPodcast d-grid'>
                            <div className='playlistShow-itemPodcast d-flex align-items-center justify-content-between'>
                                <div className='playlistShow-itemPodcast-info d-flex align-items-center'>
                                    <img src={ imgList } alt='img' />
                                    <h4>Duas for the beginning of the salah</h4>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <PlayIcon />
                                    <span>1.5k</span>
                                </div>
                            </div>
                            <div className='playlistShow-itemPodcast d-flex align-items-center justify-content-between'>
                                <div className='playlistShow-itemPodcast-info d-flex align-items-center'>
                                    <img src={ imgList } alt='img' />
                                    <h4>Duas for the beginning of the salah</h4>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <PlayIcon />
                                    <span>1.5k</span>
                                </div>
                            </div>
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
