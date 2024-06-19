import React from 'react'
import UploadIcon from '../../asset/icons/UploadIcon'
import CheckBoxCustom from '../../components/CheckBoxCustom'

const CreateEpisodes = () => {
    return (
        <div className='createEpisodes'>
            <h2 className='heading createEpisodes-heading text-start'>Create New Episode</h2>
            <div className='createEpisodes-main text-start'>
                <div className='createEpisodes-thumbnail'>
                    <h4 className='text-start'>Episode Thumbnail</h4>
                    <div className='createEpisodes-wrapper'>
                        <label for="createEpisodes-upload" className='createEpisodes-upload-label'>
                            <UploadIcon />
                            <h4>Drag and drop or browse to choose a file</h4>
                            <span>PNG, JPG and Gif files are allowed</span>
                        </label>
                        <input type='file' alt='file-image' id='createEpisodes-upload' />
                    </div>
                </div>
                <div className='createEpisodes-thumbnail'>
                    <h4>Audio</h4>
                    <div className='createEpisodes-wrapper'>
                        <label for="createEpisodes-upload-audio" className='createEpisodes-upload-label'>
                            <UploadIcon />
                            <h4>Drag and drop or browse to choose a file</h4>
                            <span>Audio file up to 500mb in mp3 or wav formate</span>
                        </label>
                        <input type='file' alt='file-audio' id='createEpisodes-upload-audio' />
                    </div>
                </div>
                <div className='createEpisodes-details'>
                    <h4 className='text-start'>Episode Details</h4>
                    <div className='createEpisodes-wrapper-title'>
                        <div className='createEpisodes-title'>
                            <h5 className='text-start'>Episode title</h5>
                            <input type='text' placeholder='Title of your episode'/>
                        </div>
                        <div className='createEpisodes-description'>
                            <h5 className='text-start'>Description</h5>
                            <textarea/>
                        </div>
                    </div>
                </div>
                <div className='createEpisodes-details'>
                    <h4 className='text-start'>Release status</h4>
                    <span className='text-start'>Only public episodes are listed in your RSS feed, drafts will never be shown and private episodes are only accessible directly by link for review</span>
                    <div className='createEpisodes-wrapper'>
                        <div className='createEpisodes-status'>
                            <CheckBoxCustom/>
                            <span>Draft</span>
                        </div>
                        <div className='createEpisodes-status'>
                            <CheckBoxCustom/>
                            <span>Private</span>
                        </div>
                        <div className='createEpisodes-status'>
                            <CheckBoxCustom/>
                            <span>Public</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='button button--primary'>Upload</button>
                </div>
            </div>
        </div>
    )
}

export default CreateEpisodes
