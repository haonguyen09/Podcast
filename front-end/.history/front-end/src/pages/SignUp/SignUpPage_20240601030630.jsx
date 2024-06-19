import React from 'react'
import logo from '../../asset/images/Logo.png'
import avatar from '../../asset/images/Image.png'
import TwitterIcon from '../../asset/icons/TwitterIcon'
import FacebookIcon from '../../asset/icons/FacebookIcon'
import GoogleIcon from '../../asset/icons/GoogleIcon'

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
                    <button className='button button--blue'>
                        <TwitterIcon />
                        <span>Sign Up With</span>
                    </button>
                    <button className='button'><FacebookIcon/></button>
                    <button className='button'><GoogleIcon/></button>
                </div>
                <span>Or Continue with email</span>
                <div className='signUp-email'>
                    <h4>Email</h4>
                    <input type='text' placeholder='Your Email'/>
                </div>
                <div className='signUp-password'>
                    <h4>Email</h4>
                    <input type='text' placeholder='Your Password'/>
                </div>
                <div>
                    <button className='button button-primary'>Sign Up</button>
                </div>
            </div>
            <div className='signUp-right'>

            </div>
        </div>
    )
}

export default SignUpPage
