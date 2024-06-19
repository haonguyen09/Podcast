import React, { useEffect, useState } from 'react'
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
import HeartIcon from '../../asset/icons/HeartIcon'
import StarIcon from '../../asset/icons/StarIcon'
import PlaylistIcon from '../../asset/icons/PlaylistIcon'
import PlayIcon from '../../asset/icons/PlayIcon';
import Pagination from 'react-bootstrap/Pagination';
import FeedItemComponent from '../../components/FeedItemComponent';
import Toggle from '../../components/Toggle';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { getDetailsUser } from '../../services/UserService';

const Feed = () => {
    const user = useSelector(state => state.user)
    const token = user?.access_token

    const [listPodcast, setListPodcast] = useState()
    let decoded

    try {
        decoded = jwtDecode(token)
    } catch (error) {
        console.error(error)
    }

    useEffect(() => {
        const fetchListPodcast = async () => {
            const response = await getDetailsUser(decoded.id)
            console.log("response feed", response)
        }

        fetchListPodcast()
    }, [decoded])
    

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
                    <Toggle />
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
                            <div className='feed-author-content'>
                                <div class="feed-author-info d-flex justify-content-end align-items-center">
                                    <h4 className='feed-author-name'>James Killened </h4>
                                    <div className='feed-author-rating'>
                                        <span>rated an episude</span>
                                        <RatingIcon/>
                                    </div>
                                </div>
                                <div className='feed-date text-start'>Jun 25th</div>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faEllipsisV}/>
                    </div>
                    <FeedItemComponent/>
                </div>
                <Pagination className='d-flex justify-content-center margin-block-30'>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>
    )
}

export default Feed
