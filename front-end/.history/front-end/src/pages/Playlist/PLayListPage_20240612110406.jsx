import React, { useEffect, useState } from 'react'
import HeartIcon from '../../asset/icons/HeartIcon'
import imgList from '../../asset/images/podcast1.webp'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAllPlaylist } from '../../services/PlaylistService'
import { jwtDecode } from 'jwt-decode'

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
                <div className='playlist-item d-flex align-items-center' onClick={handleNavi}>
                    <img src={imgList} alt='img' />
                    <div className='playlist-info'>
                        <div className='playlist-info-header d-flex justify-content-between align-items-center'>
                            <h3>UIHUT Podcsat</h3>
                            <span>Created on 1 day ago</span>
                        </div>
                        <p className='text-start'>UIHUT is a design and coding resources platform for designers, developers, and entrepreneurs.</p>
                        <div className='playlist-action d-flex justify-content-between align-items-center'>
                            <div className='playlist-podcast d-flex align-items-center'>
                                <img src={imgList} alt='img' />
                                <img src={imgList} alt='img' />
                                <span>41+</span>
                            </div>
                            <div className='playlist-likes'>
                                <HeartIcon />
                                <span>1.5k</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PLayListPage