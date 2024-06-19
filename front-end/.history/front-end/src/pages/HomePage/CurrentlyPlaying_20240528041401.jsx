import React from 'react'
import ArrowIcon from '../../asset/icons/ArrowIcon'

const CurrentlyPlaying = () => {
    return (
        <div className='current-play'>
            <div className='topics-header d-flex justify-content-between'>
                <h2 className='heading topics-heading text-start'>Topics</h2>
                <div className='topics-view d-flex align-items-center justify-content-center'>
                    <span className='view'>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
        </div>
    )
}

export default CurrentlyPlaying
