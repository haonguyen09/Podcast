import React, { useEffect, useState } from 'react'
import UploadIcon from '../../asset/icons/UploadIcon'
import CheckBoxCustom from '../../components/CheckBoxCustom'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { getAllTopic } from '../../services/TopicService'

const CreateEpisodes = () => {
    const user = useSelector(state => state.user)
    const token = user?.access_token
    let decoded 

    try {
        decoded = jwtDecode(token)
    } catch (error) {
        console.error(error)
    }

    const [image, setImage] = useState()
    const [audio, setAudio] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [status, setStatus] = useState()
    const [duration, setDuration] = useState(0)
    const [topicId, setTopicId] = useState()

    useEffect(() => {
        const fetchListTopic = async () => {
            const response = await getAllTopic()
            
        }

        fetchListTopic()
    },[decoded])


    return (
        <div className='createEpisodes'>
            <h2 className='heading createEpisodes-heading text-start'>Create New Episode</h2>
            <div className='createEpisodes-main text-start'>
                <div className='createEpisodes-thumbnail'>
                    <h4>Episode Thumbnail</h4>
                    <div className='createEpisodes-wrapper'>
                        <label for="createEpisodes-upload" className='createEpisodes-upload-label text-center'>
                            <UploadIcon />
                            <h4>Drag and drop or browse to choose a file</h4>
                            <span>PNG, JPG and Gif files are allowed</span>
                        </label>
                        <input type='file' alt='file-image' id='createEpisodes-upload' onClick={handleImage} />
                    </div>
                </div>
                <div className='createEpisodes-thumbnail'>
                    <h4>Audio</h4>
                    <div className='createEpisodes-wrapper'>
                        <label for="createEpisodes-upload-audio" className='createEpisodes-upload-label text-center'>
                            <UploadIcon />
                            <h4>Drag and drop or browse to choose a file</h4>
                            <span>Audio file up to 500mb in mp3 or wav formate</span>
                        </label>
                        <input type='file' alt='file-audio' id='createEpisodes-upload-audio' onClick={handleAudio} />
                    </div>
                </div>
                <div className='createEpisodes-details'>
                    <h4>Episode Details</h4>
                    <div className='createEpisodes-wrapper-title'>
                        <div className='createEpisodes-title'>
                            <h5>Episode title</h5>
                            <input type='text' placeholder='Title of your episode' value={title} onChange={e => setTitle(e.target.value)}/>
                        </div>
                        <div className='createEpisodes-description'>
                            <h5>Description</h5>
                            <textarea rows='4' value={description} onChange={e => setDescription(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='createEpisodes-topic'>
                    <h4>Topic</h4>
                    <select className='createEpisodes-topic-select width-full'>
                        <option>1</option>
                    </select>
                </div>
                <div className='createEpisodes-status-list'>
                    <h4>Release status</h4>
                    <span>Only public episodes are listed in your RSS feed, drafts will never be shown and private episodes are only accessible directly by link for review</span>
                    <div className='createEpisodes-wrapper-status'>
                        <div className='createEpisodes-status d-flex'>
                            <CheckBoxCustom/>
                            <div className="createEpisodes-status-wrap">
                                <h6>Draft</h6>
                                <span>Episode is currently in draft stage</span>
                            </div>
                        </div>
                        <div className='createEpisodes-status d-flex'>
                            <CheckBoxCustom />
                            <div className="createEpisodes-status-wrap">
                                <h6>Private</h6>
                                <span>The episode is not listed and only people with a link can listen</span>
                            </div>
                        </div>
                        <div className='createEpisodes-status d-flex'>
                            <CheckBoxCustom />
                            <div className="createEpisodes-status-wrap">
                                <h6>Public</h6>
                                <span>The episode wouldbe available to evryone</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='button button--primary w-full'>Upload</button>
                </div>
            </div>
        </div>
    )
}

export default CreateEpisodes
