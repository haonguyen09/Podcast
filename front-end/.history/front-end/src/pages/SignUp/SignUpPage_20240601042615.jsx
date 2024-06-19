import React from 'react'
import logo from '../../asset/images/Logo.png'
import avatar from '../../asset/images/Image.png'
import TwitterIcon from '../../asset/icons/TwitterIcon'
import FacebookIcon from '../../asset/icons/FacebookIcon'
import GoogleIcon from '../../asset/icons/GoogleIcon'

const SignUpPage = () => {
    return (
        <div className='signUp d-grid'>
            <div className='signUp-left text-start d-flex justify-content-center align-items-center'>
                <div class="signUp-leftIn d-flex justify-content-start align-items-start flex-column">
                    <img src={logo} alt='logo' className='signUp-logo'/>
                    <span className='signUp-text'>Join 128,000+ podcasters & listeners</span>
                    <div className='signUp-listImg'>
                        <img src={avatar} alt='avatar' />
                        <img src={avatar} alt='avatar' />
                        <img src={avatar} alt='avatar' />
                        <img src={avatar} alt='avatar' />
                        <img src={avatar} alt='avatar' />
                    </div>
                    <h3>Create an Account</h3>
                    <div className='signUp-listSocial d-flex align-items-center'>
                        <button className='button button--blue'>
                            <TwitterIcon />
                            <span>Sign Up With Twitter</span>
                        </button>
                        <button className='button'><FacebookIcon/></button>
                        <button className='button signUp-buttonG'><GoogleIcon/></button>
                    </div>
                    <span className='signUp-separate'>Or Continue with email</span>
                    <div className='signUp-email'>
                        <h4>Email</h4>
                        <input type='text' placeholder='Your Email'/>
                    </div>
                    <div className='signUp-password'>
                        <h4>Password</h4>
                        <input type='text' placeholder='Your Password'/>
                    </div>
                    <div>
                        <button className='button button--primary width-full'>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className='signUp-right'>

            </div>
        </div>
    )
}

export default SignUpPage
