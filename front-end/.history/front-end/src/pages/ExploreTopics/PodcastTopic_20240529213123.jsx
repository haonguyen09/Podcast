import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const PodcastTopic = () => {
    return (
        <div className='exploreItem'>
            <Breadcrumb>
                <Breadcrumb.Item href="#">explore-topics</Breadcrumb.Item>
                <Breadcrumb.Item active>religion</Breadcrumb.Item>
            </Breadcrumb>
            <div className='exploreItem-header text-start'>
                <h2 className='heading exploreItem-heading'>Popular Religion & Spirituality podcast episodes</h2>
                <span>Most listend to podcast</span>
            </div>
        </div>
    )
}

export default PodcastTopic
