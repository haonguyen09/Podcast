import React from 'react'
import topic from '../../asset/images/podcast1.webp'
import icon from '../../asset/images/Image.png'

const ExploreTopic = () => {
    return (
        <div className='explore-wrapper'>
            <div className='explore-header text-start'>
                <h2 className='heading explore-heading'>Explore Topics</h2>
                <span>Most Popular Podcast Topics</span>
            </div>
            <div className='explore-main'>
                <div className="explore-list d-grid">
                    <div className='explore-item'>
                        <img src={topic} alt='topic' />
                        <div className='layer'></div>
                        <div className='explore-title'>
                            <img src={icon} alt='icon'/>
                            <h4>Society & Culture</h4>
                        </div>
                        <span>761k podcast</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreTopic