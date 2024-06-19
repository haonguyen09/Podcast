import React from 'react'
import avatar from '../../asset/images/podcast1.webp'

const YourSubscriptions = () => {
    return (
        <div className='yourSub'>
            <div className='yourSub-header'>
                <h2 className='heading yourSub-heading'>Your Subscriptions</h2>
                <span>Hear what the people you follow have posted:</span>
            </div>
            <div className='yourSub-main'>
                <div className='yourSub-list'>
                    <div className='yourSub-item'>
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
