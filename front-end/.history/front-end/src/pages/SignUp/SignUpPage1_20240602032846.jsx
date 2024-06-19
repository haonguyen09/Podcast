import React from 'react'
import logo from '../../asset/images/Logo.png'

const SignUpPage1 = () => {
    return (
        <div className='SignUp-s1'>
            <img src={logo} />
            <div>
                <h3>Step 1 <span>SetUp Your account</span></h3>
                <div className='SignUp-s1-lines'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h4>Setup Your Account</h4>
                <span>🤘Let’s start your Podcast journey</span>

                <div class="SignUp-s1-info">
                    <div>
                        <h4>First Name</h4>
                        <input type='text' placeholder='First Name'/>
                    </div>
                    <div>
                        <h4>Last Name</h4>
                        <input type='text' placeholder='First Name'/>
                    </div>
                </div>
                <div class="SignUp-s1-info">
                    <div>
                        <h4>Email</h4>
                        <input type='text' placeholder='Your Email'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage1
