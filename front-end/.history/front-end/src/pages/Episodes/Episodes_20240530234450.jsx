import React from 'react'
import icon from '../../asset/images/cloud-upload.png'

const Episodes = () => {
    return (
        <div className='episodes'>
            <div className='episodes-header'>
                <h2 className='heading episodes-heading text-start'>Episodes</h2>
                <button className='button'>
                    <img src={icon} alt='icon' />
                    <span>Upload New Episodes</span>
                </button>
            </div>
        </div>
    )
}

export default Episodes
