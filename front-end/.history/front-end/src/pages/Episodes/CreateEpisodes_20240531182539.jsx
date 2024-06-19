import React from 'react'
import UploadIcon from '../../asset/icons/UploadIcon'

const CreateEpisodes = () => {
    return (
        <div className='createEpisodes'>
            <h2 className='heading createEpisodes-heading text-start'>Create New Episode</h2>
            <div className='createEpisodes-main'>
                <div className='createEpisodes-thumbnail'>
                    <h4>Episode Thumbnail</h4>
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
                    <h4>Episode Details</h4>
                    <div className='createEpisodes-wrapper'>
                        <label for="createEpisodes-upload-audio" className='createEpisodes-upload-label'>
                            <UploadIcon />
                            <h4>Drag and drop or browse to choose a file</h4>
                            <span>Audio file up to 500mb in mp3 or wav formate</span>
                        </label>
                        <input type='file' alt='file-audio' id='createEpisodes-upload-audio' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateEpisodes
