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
    const [status, setStatus] = useState(false)



    useEffect(() => {
        const fetchListPodcast = async () => {
            if (token) {
                try {
                    const decoded = jwtDecode(token)
                    const response = await getAllPodcast(limit, 0)
                    // console.log("response", response)
                    setListPodcast(response.data)
                    
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchListPodcast()
    }, [token, limit])

    const handleGetAll = () => {
        if (status) {
            setLimit(0)
        }
    }

    return (
        <div className='topPodcast'>
            <div className='topPodcast-header d-flex justify-content-between'>
                <h2 className='heading topPodcast-heading text-start'>Top 8 Podcast</h2>
                <div className='topPodcast-view d-flex align-items-center justify-content-center' onClick={handleGetAll}>
                    <span className='view'>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
            <div className='topPodcast-main d-grid'>
                {
                    listPodcast.map((podcast, index) => (
                        <img src={ `/uploads/${podcast.image}` } alt='podcast' key={index}/>
                    )) 
                }
            </div>
        </div>
    )
}

export default TopPodcast
