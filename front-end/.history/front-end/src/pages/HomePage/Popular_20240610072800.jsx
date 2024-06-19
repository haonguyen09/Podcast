import React, { useEffect, useState } from 'react'
import avatar from '../../asset/images/Image.png'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { getDetailsUser } from '../../services/UserService'

const Popular = () => {

    const user = useSelector(state => state.user)
    const token = user?.access_token


    const [listFollowing, setListFollowing] = useState([])

    useEffect(() => {
        const fetchListFollowing = async() => {
            if (token) {
                try {
                    const decoded = jwtDecode(token)
                    const userDetail = await getDetailsUser(decoded?.id)
                    // console.log("userDetail", userDetail.data.followingId.followings)
                    setListFollowing(userDetail.data.followingId.followings)
                } catch (error) {
                    console.error(error)
                }
            }
            
        } 

        fetchListFollowing()
    },[decoded])

    return (
        <>
            <h2 className='heading host-heading text-start'>Popular Hosts</h2>
            <ul className='host-list d-flex align-items-center justify-content-start'>
                {
                    listFollowing.map((item, index) => (
                        <li className='host-item' key={index}>
                            <a href="#" className='d-flex flex-column align-items-center'>
                                <div className='host-avatar d-flex align-items-end justify-content-center '>
                                    <img src={`/uploads/${item.avatar}`} alt='avatar'/>
                                </div>
                                <span className='host-name'>{`${item.firstName} ${item.lastName}`}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Popular
