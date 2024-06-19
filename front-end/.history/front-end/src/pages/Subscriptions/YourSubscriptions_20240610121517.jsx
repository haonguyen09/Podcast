import React, { useEffect, useState } from 'react'
import avatar from '../../asset/images/podcast1.webp'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { getDetailsUser } from '../../services/UserService'

const YourSubscriptions = () => {

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
    },[token])

    return (
        <div className='yourSub'>
            <div className='yourSub-header text-start'>
                <h2 className='heading yourSub-heading'>Your Subscriptions</h2>
                <span>Hear what the people you follow have posted:</span>
            </div>
            <div className='yourSub-main'>
                <div className='yourSub-list d-flex  justify-content-between align-items-center'>
                    {
                        listFollowing.map((item, index) => (
                            <div className='yourSub-item d-flex flex-column justify-content-center align-items-center' key={index}>
                                <img src={`/uploads/${item.avatar}`} alt='avatar' />
                                <h3>{`${item.firstName} ${item.lastName}`}</h3>
                                <span>Psychologist (UK)</span>
                            </div>
                        ))
                    }
                    
                    <div className='yourSub-item d-flex flex-column justify-content-center align-items-center'>
                        <img src={avatar} alt='avatar' />
                        <h3>Ralph Edwards</h3>
                        <span>Psychologist (UK)</span>
                    </div>
                    <div className='yourSub-item d-flex flex-column justify-content-center align-items-center'>
                        <img src={avatar} alt='avatar' />
                        <h3>Ralph Edwards</h3>
                        <span>Psychologist (UK)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourSubscriptions
