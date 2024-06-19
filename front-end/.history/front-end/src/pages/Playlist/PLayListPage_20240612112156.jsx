import React, { useEffect, useState } from 'react'
import HeartIcon from '../../asset/icons/HeartIcon'
import imgList from '../../asset/images/podcast1.webp'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAllPlaylist } from '../../services/PlaylistService'
import { jwtDecode } from 'jwt-decode'
import { remainingTime } from '../../utils/remainingTime'

const PLayListPage = () => {

    const user = useSelector(state => state.user)
    const token = user.access_token
    const navigate = useNavigate();
    const handleNavi = () => {
        navigate('/playlist/show')
    }

    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        const fetchPlaylist = async () => {
            const decoded = jwtDecode(token)
            const response = await getAllPlaylist()
            const filter = response.data.filter(item => item.userId._id === decoded.id)
            setPlaylists(filter)
        }

        fetchPlaylist()
    }, [token])

    return (
        <div className='playlist'>
            <div className='playlist-header text-start'>
                <h2 className='heading playlist-heading'>Playlist</h2>
                <span>Hear your own playlists and the playlists you’ve liked</span>
            </div>
            <div className='playlist-list d-grid'>
                {
                    playlists.map((playlist, index) => (
                        <div className='playlist-item d-flex align-items-center' onClick={handleNavi(playlist.podcasts)} key={index}>
                            <img src={`/uploads/${playlist.image}`} alt='img' />
                            <div className='playlist-info'>
                                <div className='playlist-info-header d-flex justify-content-between align-items-center'>
                                    <h3>{playlist.title}</h3>
                                    <span>{remainingTime(playlist.createdAt) }</span>
                                </div>
                                <p className='text-start'>{playlist.description}</p>
                                <div className='playlist-action d-flex justify-content-between align-items-center'>
                                    <div className='playlist-podcast d-flex align-items-center'>
                                        {
                                            playlist.podcasts.map(podcast => (
                                                <img src={`/uploads/${podcast.image}`} alt='img' />
                                            ))
                                        }
                                        <span>{`+${playlist.podcasts.length}`}</span>
                                    </div>
                                    <div className='playlist-likes'>
                                        <HeartIcon />
                                        <span>1.5k</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PLayListPage