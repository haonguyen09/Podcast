import React from 'react'
import avatar from '../../asset/images/podcast1.webp'

const YourSubscriptions = () => {
    return (
        <div className='yourSub'>
            <div className='yourSub-header text-start'>
                <h2 className='heading yourSub-heading'>Your Subscriptions</h2>
                <span>Hear what the people you follow have posted:</span>
            </div>
            <div className='yourSub-main'>
                <div className='yourSub-list d-flex flex-column justify-content-between align-items-center'>
                    <div className='yourSub-item d-flex flex-column justify-content-center align-items-center'>
                        <img src={avatar} alt='avatar' />
                        <h3>Ralph Edwards</h3>
                        <span>Psychologist (UK)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourSubscriptions
