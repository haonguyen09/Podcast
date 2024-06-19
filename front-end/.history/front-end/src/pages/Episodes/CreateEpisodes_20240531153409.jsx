import React from 'react'
import UploadIcon from '../../asset/icons/UploadIcon'

const CreateEpisodes = () => {
    return (
        <div className='createEpisodes'>
            <h2 className='heading createEpisodes-heading text-start'>Create New Episode</h2>
            <div className='createEpisodes-main'>
                <div className='createEpisodes-thumbnail'>
                    <h4>Episode Thumbnail</h4>
                    <div>
                        <lable>
                            <UploadIcon />
                            <h4>Drag and drop or browse to choose a file</h4>
                            <span>PNG, JPG and Gif files are allowed</span>
                        </lable>
                        <input type='file' alt='file-image' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateEpisodes