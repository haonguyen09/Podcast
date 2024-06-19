import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faStar, faEllipsisV, faClock, faHourglass } from '@fortawesome/free-solid-svg-icons'
import avatar from '../../asset/images/Image.png'
import img from '../../asset/images/podcast1.webp'
import CheckIcon from '../../asset/icons/CheckIcon'
import RatingIcon from '../../asset/icons/RatingIcon'
import TimeIcon from '../../asset/icons/TimeIcon'
import TimerIcon from '../../asset/icons/TimerIcon'
import ShareIcon from '../../asset/icons/ShareIcon'
import StarIcon from '../../asset/icons/StarIcon'
import PlaylistIcon from '../../asset/icons/PlaylistIcon'

const Feed = () => {

    const tabs = [{ name: 'My Feed', href: '/my-feed' }, { name: 'Popular', href: '#' }, { name: 'Recent', href: '#' }]
    
    return (
        <div className='feed'>
            <div className='feed-header d-flex justify-content-between align-items-center'>
                <Nav variant="tabs" defaultActiveKey="/my-feed" className='feed-tab'>
                    {
                        tabs.map((tab, index) => (
                            <Nav.Item key={index} className='feed-tab-item'>
                                <Nav.Link href={ tab.href } className='feed-tab-item-link'>{ tab.name }</Nav.Link>
                            </Nav.Item>
                        ))
                    }
                </Nav>
                <div className='feed-toggle d-flex align-items-center'>
                    <div className='toggle'>
                        <div className='toggle-spinner'></div>
                    </div>
                    <p>New Releases &amp; Guests Only</p>
                </div>
            </div>
            <div className='feed-main'>
                <div className='feed-item'>
                    <div className='feed-item-header d-flex justify-content-between align-items-center'>
                        <div className='feed-author d-flex justify-content-center align-items-center'>
                            <div className='feed-author-avatar'>
                                <img src={ avatar } alt='avatar' />
                                <CheckIcon className='feed-author-verify'/>
                            </div>
                            <div className='feed-author-content d-flex align-items-center'>
                                <h4 className='feed-author-name'>James Killened</h4>
                                <div className='feed-author-rating'>
                                    <span>rated an episude</span>
                                    <RatingIcon/>
                                </div>
                                <div className='feed-date'>Jun 25th</div>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faEllipsisV}/>
                    </div>
                    <div className='feed-item-content'>
                        <img src={img} className='feed-item-content-img' />
                        <div className='feed-item-content-right'>
                            <p>Perspective Podcast (Ep. 1)</p>
                            <h3>Philosophy vs Religion vs Science: Yahia Amin and Sadman Sadik</h3>
                            <div className='feed-item-content-time'>
                                <div className='feed-item-content-date'>
                                    <TimeIcon/>
                                    <span>11 dayes ago</span>
                                </div>
                                <div className='feed-item-content-minus'>
                                    <TimerIcon/>
                                    <span>45mins 10 Sec</span>
                                </div>
                            </div>
                            <p>Play Philosophy vs Religion vs Science: Perspective Podcast (Ep. 1) | Yahia Amin and Sadman Sadik by PERSPECTIVE with Yahia Amin on desktop and mobile. Play over 265 million tracks for...</p>
                        </div>
                    </div>
                    <div className='feed-item-footer'>
                        <div className='feed-item-footer-left'>

                        </div>
                        <div className='feed-item-footer-right'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed