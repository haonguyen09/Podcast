import React from 'react'
import ArrowIcon from '../../asset/icons/ArrowIcon'
import podcast from '../../asset/images/podcast1.webp'
import icon from '../../asset/images/Image.png'

const Topics = () => {
    return (
        <div className='topics'>
            <div className='topics-header d-flex justify-content-between'>
                <h2 className='heading topics-heading text-start'>Topics</h2>
                <div className='topics-view d-flex align-items-center justify-content-center'>
                    <span className='view'>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
            <div className='topics-main'>
                <div className="topics-item">
                    <div className='topics-img'>
                        <img src={podcast} />
                        <div className='topics-img-layer'></div>
                        <div className='topics-info'>
                            <div className='topics-name d-flex align-items-center justify-content-center'>
                                <img src={ icon } />
                                <span>Society & Culture</span>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topics
