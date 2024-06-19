import React, { useEffect, useState } from 'react'
import podcast from '../../asset/images/podcast1.webp'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { getAllPodcast } from '../../services/PodcastService'

const SortPodcast = () => {

    const user = useSelector(state => state.user)
    const token = user?.access_token

    const [listPodcast, setListPodcast] = useState([])
    const [limit, setLimit] = useState(4)
    const [status, setStatus] = useState(false)



    useEffect(() => {
        const fetchListPodcast = async () => {
            if (token) {
                try {
                    const decoded = jwtDecode(token)
                    const response = await getAllPodcast(limit, 0)
                    console.log("response", response)

                    setListPodcast(response.data)
                    
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchListPodcast()
    }, [token, limit])

    const handleGetAll = () => {
        setStatus(!status)
        if (status) {
            setLimit(0)
        } else {
            setLimit(4)
        }
    }

    return (
        <div className='sortP'>
            <div className='sortP-header'>
                <h2 className='heading sortP-heading text-start'>Sort Podcast</h2>
            </div>
            <div className='sortP-list d-grid'>
                <div className='sortP-item d-flex align-items-center'>
                    <img src={podcast} alt='podcast' />
                    <div className='sortP-info text-start'>
                        <h4>Christian Sister Accept Islam | Dr. Zakir Naik</h4>
                        <span>4 days ago &bull; 15 minute</span>
                    </div>
                </div>
                <div className='sortP-item d-flex align-items-center'>
                    <img src={podcast} alt='podcast' />
                    <div className='sortP-info text-start'>
                        <h4>Christian Sister Accept Islam | Dr. Zakir Naik</h4>
                        <span>4 days ago &bull; 15 minute</span>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className='button width-full margin-block-30' onClick={handleGetAll}>See More</button>
            </div>
        </div>
    )
}

export default SortPodcast