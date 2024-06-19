import React from 'react'
import ArrowIcon from '../../asset/icons/ArrowIcon'
import podcast from '../../asset/images/podcast1.webp'
import PlayIcon from '../../asset/icons/PlayIcon'
import HeartIcon from '../../asset/icons/HeartIcon'

const ListeningHistory = () => {
    return (
        <div className='history'>
            <div className='history-header d-flex justify-content-between'>
                <h2 className='heading history-heading text-start'>Listening History</h2>
                <div className='history-view d-flex align-items-center justify-content-center'>
                    <span className='view'>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
            <div className='history-main'>
                <ul className='history-list'>
                    <li className='history-item'>
                        <a href='#' className='d-flex justify-content-between align-items-center'>
                            <img src={podcast} />
                            <div className='history-author-info'>
                                <span>@yahiaadmin</span>
                                <h3>Yahia Admin</h3>
                                <div className='history-action'>
                                    <div className='history-action-play'>
                                        <PlayIcon />
                                        <span>156</span>
                                    </div>
                                    <div className='history-action-like'>
                                        <HeartIcon />
                                        <span>78</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ListeningHistory
