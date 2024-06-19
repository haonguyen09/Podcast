import React from 'react'
import ArrowIcon from '../../asset/icons/ArrowIcon'
import avatar from '../../asset/images/podcast1.webp'

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
            <div className='suggest-follow-main'>
                <ul className='suggest-follow-list'>
                    <li className='suggest-follow-item'>
                        <a href='#'>
                            <div className='suggest-follow-author'>
                                <img src={avatar} />
                                <div className='suggest-follow-author-info'>
                                    <h3>Yahia Admin</h3>
                                    <ppan>@yahiaadmin</ppan>
                                </div>
                            </div>
                            <button className='button buttn--primary'>Follow</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SuggestFollow
