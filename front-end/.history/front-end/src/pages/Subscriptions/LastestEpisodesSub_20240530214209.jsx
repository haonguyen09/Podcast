import React from 'react'
import FeedItemComponent from '../../components/FeedItemComponent'

const LastestEpisodesSub = () => {
    return (
        <div className='lastest-episodes'>
            <div className='lastest-episodes-header'>
                <h2 className='heading lastest-episodes-heading'>Latest Episodes</h2>
            </div>
            <div className='lastest-episodes-main'>
                <div className='lastest-episodes-list d-grid'>
                    <div className='lastest-episodes-item'>
                        <FeedItemComponent/>
                    </div>
                    <div className='lastest-episodes-item'>
                        <FeedItemComponent/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastestEpisodesSub
