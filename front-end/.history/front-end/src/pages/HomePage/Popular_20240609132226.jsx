import React, { useEffect } from 'react'
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


    useEffect(() => {
        const fetchListFollowing = async() => {
            const userDetail = await getDetailsUser(decoded.id)
            console.log("userDetail", userDetail)
        } 

        fetchListFollowing()
    },[decoded])

    return (
        <>
            <h2 className='heading host-heading text-start'>Popular Hosts</h2>
            <ul className='host-list d-flex align-items-center justify-content-between'>
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
