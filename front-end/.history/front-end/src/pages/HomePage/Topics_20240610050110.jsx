import React, { useEffect, useState } from 'react'
import ArrowIcon from '../../asset/icons/ArrowIcon'
import podcast from '../../asset/images/podcast1.webp'
import icon from '../../asset/images/Image.png'
import { useSelector } from 'react-redux'
import { getAllTopic } from '../../services/TopicService'
import { jwtDecode } from 'jwt-decode'

const Topics = () => {

    const user = useSelector(state => state.user)
    const token = user?.access_token

    const [listTopic, setListTopic] = useState([])
    const [limit, setLimit] = useState(4)
    const [status, setStatus] = useState(false)



    useEffect(() => {
        const fetchListPodcast = async () => {
            if (token) {
                try {
                    const decoded = jwtDecode(token)
                    const response = await getAllTopic(limit, 0)
                    console.log("response", response)
                    setListTopic(response.data)
                    
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
        <div className='topics'>
            <div className='topics-header d-flex justify-content-between'>
                <h2 className='heading topics-heading text-start'>Topics</h2>
                <div className='topics-view d-flex align-items-center justify-content-center' onClick={handleGetAll}>
                    <span className='view'>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
            <div className='topics-main d-grid'>
                {
                    listTopic.map((topic, index) => (
                        <div className="topics-item">
                            <div className='topics-img'>
                                <img src={`/uploads/${topic.image}`} />
                                <div className='layer'></div>
                                <div className='topics-info text-start'>
                                    <div className='topics-name d-flex align-items-center justify-content-start'>
                                        <img src={ `/uploads/${topic.icon}` } />
                                        <span>{ topic.name }</span>
                                    </div>
                                    <span>{ `${topic.totalPodcast} podcasts` }</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Topics
