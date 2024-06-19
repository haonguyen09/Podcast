import React from 'react'
import logo from '../../asset/images/Logo.png'

const SignUpPage1 = () => {
    return (
        <div class="signUp-s1-wrapper d-flex justify-content-center align-items-center">
            <div className='signUp-s1 d-flex justify-content-center align-items-start flex-column'>
                <div>
                    <img srcSet={`${logo} 2x`} className='width-full'/>
                </div>
                <div className='signUp-s1-header'>
                    <h3>Step 1 <span>SetUp Your account</span></h3>
                    <div className='signUp-s1-lines d-flex align-items-center'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h4>Setup Your Account</h4>
                    <span>🤘Let’s start your Podcast journey</span>
                    <div class="signUp-s1-info">
                        <div>
                            <h4>First Name</h4>
                            <input type='text' placeholder='First Name'/>
                        </div>
                        <div>
                            <h4>Last Name</h4>
                            <input type='text' placeholder='Last Name'/>
                        </div>
                    </div>
                    <div class="signUp-s1-info">
                        <div>
                            <h4>Email</h4>
                            <input type='text' placeholder='Your Email'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage1
