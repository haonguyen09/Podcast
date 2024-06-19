import React from 'react'
import ArrowIcon from '../../asset/icons/ArrowIcon'
import podcast from '../../asset/images/podcast1.webp'

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
                                <h3>Yahia Admin</h3>
                                <span>@yahiaadmin</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ListeningHistory
