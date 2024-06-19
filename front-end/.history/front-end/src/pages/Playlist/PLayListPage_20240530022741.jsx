import React from 'react'

const PLayListPage = () => {
    return (
        <div className='playlist'>
            <div className='playlist-header'>
                <h2 className='heading playlist-heading'>Playlist</h2>
                <span>Hear your own playlists and the playlists you’ve liked</span>
            </div>
            <div className='playlist-list'>
                <div className='playlist-item'>
                    <img src={imgList} alt='img' />
                    <div className='playlist-info'>
                        <div className='playlist-info-header d-flex justify-content-between align-items-center'>
                            <h3>UIHUT Podcsat</h3>
                            <span>Created on 1 day ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PLayListPage