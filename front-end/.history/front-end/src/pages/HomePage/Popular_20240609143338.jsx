import React, { useEffect, useState } from 'react'
import avatar from '../../asset/images/Image.png'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { getDetailsUser } from '../../services/UserService'

const Popular = () => {

    const user = useSelector(state => state.user)
    const token = user?.access_token
    let decoded
    try {
        decoded = jwtDecode(token)
    } catch (error) {
        console.error(error)
    }

    const [listFollowing, setListFollowing] = useState([])

    useEffect(() => {
        const fetchListFollowing = async() => {
            const userDetail = await getDetailsUser(decoded.id)
            // console.log("userDetail", userDetail.data.followingId.followings)
            setListFollowing(userDetail.data.followingId.followings)
        } 

        fetchListFollowing()
    },[decoded])

    return (
        <>
            <h2 className='heading host-heading text-start'>Popular Hosts</h2>
            <ul className='host-list d-flex align-items-center justify-content-between'>
                {
                    listFollowing.map((item, index) => (
                        <li className='host-item' key={index}>
                            <a href="#" className='d-flex flex-column align-item-center'>
                                <div className='host-avatar d-flex align-items-end justify-content-center '>
                                    <img src={`${process.env.REACT_APP_BACKEND}/uploads/${item.avatar}`} alt='avatar'/>
                                </div>
                                <span className='host-name'>{`${item.firstName} ${item.lastName}`}</span>
                            </a>
                        </li>
                    ))
                }
                <li className='host-item'>
                    <a href="#">
                        <div className='host-avatar d-flex align-items-end justify-content-center '>
                            <img src={avatar} alt='avatar'/>
                        </div>
                        <span className='host-name'>Thomas</span>
                    </a>
                </li>
                <li className='host-item'>
                    <a href="#">
                        <div className='host-avatar d-flex align-items-end justify-content-center '>
                            <img src={avatar} alt='avatar'/>
                        </div>
                        <span className='host-name'>Thomas</span>
                    </a>
                </li>
                <li className='host-item'>
                    <a href="#">
                        <div className='host-avatar d-flex align-items-end justify-content-center '>
                            <img src={avatar} alt='avatar'/>
                        </div>
                        <span className='host-name'>Thomas</span>
                    </a>
                </li>
                <li className='host-item'>
                    <a href="#">
                        <div className='host-avatar d-flex align-items-end justify-content-center '>
                            <img src={avatar} alt='avatar'/>
                        </div>
                        <span className='host-name'>Thomas</span>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Popular
