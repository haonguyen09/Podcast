import React from 'react'
import HeartIcon from '../../asset/icons/HeartIcon'
import imgList from '../../asset/images/podcast1.webp'

const PLayListPage = () => {
    return (
        <div className='playlist'>
            <div className='playlist-header text-start'>
                <h2 className='heading playlist-heading'>Playlist</h2>
                <span>Hear your own playlists and the playlists you’ve liked</span>
            </div>
            <div className='playlist-list d-grid'>
                <div className='playlist-item d-flex align-items-center'>
                    <img src={imgList} alt='img' />
                    <div className='playlist-info'>
                        <div className='playlist-info-header d-flex justify-content-between align-items-center'>
                            <h3>UIHUT Podcsat</h3>
                            <span>Created on 1 day ago</span>
                        </div>
                        <p>UIHUT is a design and coding resources platform for designers, developers, and entrepreneurs.</p>
                        <div className='playlist-action d-flex justify-content-between align-items-center'>
                            <div className='playlist-podcast'>
                                <img src={imgList} alt='img' />
                                <img src={imgList} alt='img' />
                                <span>41+</span>
                            </div>
                            <div>
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