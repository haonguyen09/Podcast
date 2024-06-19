import React from 'react'
import CloudIcon from '../../asset/icons/CloudIcon'

const Episodes = () => {
    return (
        <div className='episodes'>
            <div className='episodes-header d-flex justify-content-between align-items-center'>
                <h2 className='heading episodes-heading text-start'>Episodes</h2>
                <button className='button button--secondary'>
                    <CloudIcon />
                    <span>Upload New Episodes</span>
                </button>
            </div>
        </div>
    )
}

export default Episodes
