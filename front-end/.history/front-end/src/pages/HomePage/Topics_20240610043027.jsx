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
    const [limit, setLimit] = useState(6)
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
            setLimit(6)
        }
    }

    return (
        <div className='topics'>
            <div className='topics-header d-flex justify-content-between'>
                <h2 className='heading topics-heading text-start'>Topics</h2>
                <div className='topics-view d-flex align-items-center justify-content-center'>
                    <span className='view'>View All</span>
                    <ArrowIcon/>
                </div>
            </div>
            <div className='topics-main d-grid'>
                <div className="topics-item">
                    <div className='topics-img'>
                        <img src={podcast} />
                        <div className='layer'></div>
                        <div className='topics-info text-start'>
                            <div className='topics-name d-flex align-items-center justify-content-start'>
                                <img src={ icon } />
                                <span>Society & Culture</span>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </div>
                </div>
                <div className="topics-item">
                    <div className='topics-img'>
                        <img src={podcast} />
                        <div className='layer'></div>
                        <div className='topics-info text-start'>
                            <div className='topics-name d-flex align-items-center justify-content-start'>
                                <img src={ icon } />
                                <span>Society & Culture</span>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </div>
                </div>
                <div className="topics-item">
                    <div className='topics-img'>
                        <img src={podcast} />
                        <div className='layer'></div>
                        <div className='topics-info text-start'>
                            <div className='topics-name d-flex align-items-center justify-content-start'>
                                <img src={ icon } />
                                <span>Society & Culture</span>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </div>
                </div>
                <div className="topics-item">
                    <div className='topics-img'>
                        <img src={podcast} />
                        <div className='layer'></div>
                        <div className='topics-info text-start'>
                            <div className='topics-name d-flex align-items-center justify-content-start'>
                                <img src={ icon } />
                                <span>Society & Culture</span>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topics
