import React from 'react'
import Toggle from '../../components/Toggle'

const SignUpStep2 = () => {
    return (
        <div className='signUp-s2'>
            <div className='signUp-s2-list'>
                <div className='signUp-s2-item'>
                    <div>
                        <h4>Arts</h4>
                        <span>563.9k Podcasts</span>
                    </div>
                    <Toggle/>
                </div>
            </div>
        </div>
    )
}

export default SignUpStep2
