import React, { useEffect, useState } from 'react'
import ArrowIcon from '../../asset/icons/ArrowIcon'
import avatar from '../../asset/images/podcast1.webp'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { getDetailsUser } from '../../services/UserService'

const SuggestFollow = () => {

    const user = useSelector(state => state.user)
    const token = user?.access_token

    const [listSuggestFollow, setListSuggestFollow] = useState([])
    const [listFollowing, setlistFollowing] = useState([])
    const [status, setStatus] = useState(false)



    useEffect(() => {
        const fetchListPodcast = async () => {
            if (token) {
                try {
                    const decoded = jwtDecode(token)
                    const response = await getDetailsUser(decoded.id)
                    console.log("responseSSuggest", response.data.suggestFollow)
                    console.log("responseFollowing", response.data.followingId)
                    // setListPodcast(response.data)
                    
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchListPodcast()
    }, [token])

    return (
        <div className='suggest-follow'>
            <div className='suggest-follow-header d-flex justify-content-between'>
                <h2 className='heading suggest-follow-heading text-start'>Suggest Follows</h2>
                <div className='suggest-follow-view d-flex align-items-center justify-content-center'>
                    <span className='view'>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
            <div className='suggest-follow-main'>
                <ul className='suggest-follow-list'>
                    <li className='suggest-follow-item'>
                        <a href='#' className='d-flex justify-content-between align-items-center'>
                            <div className='suggest-follow-author d-flex'>
                                <img src={avatar} />
                                <div className='suggest-follow-author-info'>
                                    <h3>Yahia Admin</h3>
                                    <span>@yahiaadmin</span>
                                </div>
                            </div>
                            <button className='button button--primary button-follow'>Follow</button>
                        </a>
                    </li>
                    <li className='suggest-follow-item'>
                        <a href='#' className='d-flex justify-content-between align-items-center'>
                            <div className='suggest-follow-author d-flex'>
                                <img src={avatar} />
                                <div className='suggest-follow-author-info'>
                                    <h3>Yahia Admin</h3>
                                    <span>@yahiaadmin</span>
                                </div>
                            </div>
                            <button className='button button-follow'>Followed</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SuggestFollow
