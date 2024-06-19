import React from 'react'
import video from '../../asset/podcasts/Podcast English - Luyện Nghe Tiếng Anh Mỗi Ngày - No.49.mp4'

const CurrentlyPlaying = () => {
    return (
        <div className='current-play'>
            <div className='current-play-header d-flex justify-content-between'>
                <h2 className='heading current-play-heading text-start'>Currently Playing</h2>
            </div>
            <div className='current-play-main'>
                <video>
                    <source src={video} />
                </video>
            </div>
        </div>
    )
}

export default CurrentlyPlaying
