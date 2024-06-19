import React, { useEffect, useState } from 'react'
import ArrowIcon from '../../asset/icons/ArrowIcon'
import podcast from '../../asset/images/podcast1.webp'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { getAllPodcast } from '../../services/PodcastService'

const TopPodcast = () => {

    const user = useSelector(state => state.user)
    const token = user?.access_token

    const [listPodcast, setListPodcast] = useState([])
    const [limit, setLimit] = useState(6)



    useEffect(() => {
        const fetchListPodcast = async () => {
            if (token) {
                try {
                    const decoded = jwtDecode(token)
                    const response = await getAllPodcast(limit, 0)
                    console.log("response", response)
                    
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchListPodcast()
    }, [token])

    return (
        <div className='topPodcast'>
            <div className='topPodcast-header d-flex justify-content-between'>
                <h2 className='heading topPodcast-heading text-start'>Top 8 Podcast</h2>
                <div className='topPodcast-view d-flex align-items-center justify-content-center'>
                    <span className='view'>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
            <div className='topPodcast-main d-grid'>
                <img src={ podcast } alt='podcast'/>
                <img src={ podcast } alt='podcast'/>
                <img src={ podcast } alt='podcast'/>
                <img src={ podcast } alt='podcast'/>
                <img src={ podcast } alt='podcast'/>
                <img src={ podcast } alt='podcast'/>
            </div>
        </div>
    )
}

export default TopPodcast
