import React from 'react'
import PlusIcon from '../../asset/icons/PlusIcon'
import img from '../../asset/images/podcast1.webp'

const SignUpStep3 = () => {
    return (
        <div className='signUp-s3'>
            <input className='signUp-s3-search' placeholder='Search Podcast' />
            <div className='signUp-s3-list d-grid'>
                <div className='signUp-s3-item'>
                    <img src={img} alt='img' />
                    <PlusIcon className='signUp-s3-item-plus'/>
                </div>
            </div>
        </div>
    )
}

export default SignUpStep3
