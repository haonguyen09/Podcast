import React from 'react'
import imgList from '../../asset/images/podcast1.webp'
import PodcastItemComponent from '../../components/PodcastItemComponent'

const PLayListShow = () => {
    return (
        <div className='playlistShow'>
        <div className='playlist-header text-start'>
            <h2 className='heading playlist-heading'>Playlist</h2>
            <span>Hear your own playlists and the playlists you’ve liked</span>
        </div>
        <div className='playlistShow-list d-grid'>
            <div className='playlistShow-item d-flex align-items-center'>
                <img src={imgList} alt='img' />
                <div className='playlistShow-info'>
                    <PodcastItemComponent/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PLayListShow
