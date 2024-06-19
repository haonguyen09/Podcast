import React from 'react'
import PodcastItemComponent from '../../components/PodcastItemComponent'

const LastestEpisodesSub = () => {
    return (
        <div className='lastest-episodes'>
            <div className='lastest-episodes-header'>
                <h2 className='heading lastest-episodes-heading'>Latest Episodes</h2>
            </div>
            <div className='lastest-episodes-main'>
                <div className='lastest-episodes-list d-grid'>
                    <div className='lastest-episodes-item'>
                        <PodcastItemComponent/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastestEpisodesSub
