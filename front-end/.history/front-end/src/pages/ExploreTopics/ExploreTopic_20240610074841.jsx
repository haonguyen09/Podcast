import React, { useEffect, useState } from 'react'
import topic from '../../asset/images/podcast1.webp'
import icon from '../../asset/images/Image.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
                    const response = await getAllPodcast(limit, 0)
                    // console.log("response", response)
                    setListPodcast(response.data)
                    
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
                    <a onClick={handleNav} className='explore-item'>
                        <img src={topic} alt='topic' className='explore-img'/>
                        <div className='layer'></div>
                        <div className="explore-info">
                            <div className='explore-title d-flex align-items-center'>
                                <img src={icon} alt='icon'/>
                                <h4>Society & Culture</h4>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </a>
                    <a onClick={handleNav} className='explore-item'>
                        <img src={topic} alt='topic' className='explore-img'/>
                        <div className='layer'></div>
                        <div className="explore-info">
                            <div className='explore-title d-flex align-items-center'>
                                <img src={icon} alt='icon'/>
                                <h4>Society & Culture</h4>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </a>
                    <a onClick={handleNav} className='explore-item'>
                        <img src={topic} alt='topic' className='explore-img'/>
                        <div className='layer'></div>
                        <div className="explore-info">
                            <div className='explore-title d-flex align-items-center'>
                                <img src={icon} alt='icon'/>
                                <h4>Society & Culture</h4>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </a>
                    <a onClick={handleNav} className='explore-item'>
                        <img src={topic} alt='topic' className='explore-img'/>
                        <div className='layer'></div>
                        <div className="explore-info">
                            <div className='explore-title d-flex align-items-center'>
                                <img src={icon} alt='icon'/>
                                <h4>Society & Culture</h4>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </a>
                    <a onClick={handleNav} className='explore-item'>
                        <img src={topic} alt='topic' className='explore-img'/>
                        <div className='layer'></div>
                        <div className="explore-info">
                            <div className='explore-title d-flex align-items-center'>
                                <img src={icon} alt='icon'/>
                                <h4>Society & Culture</h4>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </a>
                    <a onClick={handleNav} className='explore-item'>
                        <img src={topic} alt='topic' className='explore-img'/>
                        <div className='layer'></div>
                        <div className="explore-info">
                            <div className='explore-title d-flex align-items-center'>
                                <img src={icon} alt='icon'/>
                                <h4>Society & Culture</h4>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </a>
                    <a onClick={handleNav} className='explore-item'>
                        <img src={topic} alt='topic' className='explore-img'/>
                        <div className='layer'></div>
                        <div className="explore-info">
                            <div className='explore-title d-flex align-items-center'>
                                <img src={icon} alt='icon'/>
                                <h4>Society & Culture</h4>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </a>
                    <a onClick={handleNav} className='explore-item'>
                        <img src={topic} alt='topic' className='explore-img'/>
                        <div className='layer'></div>
                        <div className="explore-info">
                            <div className='explore-title d-flex align-items-center'>
                                <img src={icon} alt='icon'/>
                                <h4>Society & Culture</h4>
                            </div>
                            <span>761k podcast</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ExploreTopic