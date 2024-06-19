import React from 'react'
import PlusIcon from '../../asset/icons/PlusIcon'

const SignUpStep3 = () => {
    return (
        <div className='signUp-s3'>
            <input className='signUp-s3-search' placeholder='Search Podcast' />
            <div className='signUp-s3-list d-grid'>
                <div>
                    <img src={img} alt='img' />
                    <PlusIcon className='signUp-s3-plus'/>
                </div>
            </div>
        </div>
    )
}

export default SignUpStep3
