import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import podcast from '../../asset/images/podcast1.webp'
import PodcastItemComponent from '../../components/PodcastItemComponent';

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
            <div className='exploreItem-main'>
                <div className='exploreItem-list'>
                    <div className='exploreItem-item'>
                        <img src={podcast} alt='podcast' />
                        <div className='exploreItem-action'>
                            <PodcastItemComponent audioUrl={ audio } />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PodcastTopic
