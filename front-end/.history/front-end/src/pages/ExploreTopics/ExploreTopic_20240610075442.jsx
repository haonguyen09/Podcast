import React, { useEffect, useState } from 'react'
import topic from '../../asset/images/podcast1.webp'
import icon from '../../asset/images/Image.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { getAllTopic } from '../../services/TopicService'

const ExploreTopic = () => {

    const navigate = useNavigate();

    const handleNav = () => {
        navigate('/explore-topics/religion')
    }

    const user = useSelector(state => state.user)
    const token = user?.access_token

    const [listTopic, setListTopic] = useState([])


    useEffect(() => {
        const fetchListTopic = async () => {
            if (token) {
                try {
                    const decoded = jwtDecode(token)
                    const response = await getAllTopic()
                    // console.log("response", response)
                    setListTopic(response.data)
                    
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchListTopic()
    }, [token])



    return (
        <div className='explore-wrapper'>
            <div className='explore-header text-start'>
                <h2 className='heading explore-heading'>Explore Topics</h2>
                <span>Most Popular Podcast Topics</span>
            </div>
            <div className='explore-main d-grid'>
                <div className="explore-list d-grid">
                    {
                        listTopic.map((topic, index) => (
                            <a onClick={handleNav(topic)} className='explore-item' key={index}>
                                <img src={`${process.env.REACT_APP_BACKEND}/uploads/${topic.image}`} alt='topic' className='explore-img'/>
                                <div className='layer'></div>
                                <div className="explore-info">
                                    <div className='explore-title d-flex align-items-center'>
                                        <img src={`${process.env.REACT_APP_BACKEND}/uploads/${topic.icon}`} alt='icon'/>
                                        <h4>{topic.name}</h4>
                                    </div>
                                    <span>{`${topic.totalPodcast} podcasts`}</span>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ExploreTopic