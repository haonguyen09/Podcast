import React from 'react'

const SuggestFollow = () => {
    return (
        <div className='suggest-follow'>
            <div className='suggest-follow-header d-flex justify-content-between'>
                <h2 className='heading suggest-follow-heading text-start'>Top 8 Podcast</h2>
                <div className='suggest-follow-view d-flex align-items-center'>
                    <span>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
        </div>
    )
}

export default SuggestFollow
