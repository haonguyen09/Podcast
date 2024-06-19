import React from 'react'
import ArrowIcon from '../../asset/icons/ArrowIcon'
import podcast from '../../asset/images/podcast1.webp'

const SuggestFollow = () => {
    return (
        <div className='suggest-follow'>
            <div className='suggest-follow-header d-flex justify-content-between'>
                <h2 className='heading suggest-follow-heading text-start'>Suggest Follows</h2>
                <div className='suggest-follow-view d-flex align-items-center'>
                    <span>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
        </div>
    )
}

export default SuggestFollow
