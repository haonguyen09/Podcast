import React from 'react'
import logo from '../../asset/images/Logo.png'
import avatar from '../../asset/images/Image.png'

const SignUpPage = () => {
    return (
        <div className='signUp'>
            <div className='signUp-left'>
                <img src={logo} alt='logo' />
                <span>Join 128,000+ podcasters & listeners</span>
                <div className='signUp-listImg'>
                    <img src={avatar} alt='avatar' />
                    <img src={avatar} alt='avatar' />
                    <img src={avatar} alt='avatar' />
                    <img src={avatar} alt='avatar' />
                    <img src={avatar} alt='avatar' />
                </div>
                <h3>Create an Account</h3>
                <div className='signUp-listSocial'>
                    
                </div>
            </div>
            <div className='signUp-right'>

            </div>
        </div>
    )
}

export default SignUpPage
