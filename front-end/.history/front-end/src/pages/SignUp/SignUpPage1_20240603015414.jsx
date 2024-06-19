import React from 'react'
import logo from '../../asset/images/Logo.png'
import HeaderSigup from './HeaderSigup'

const SignUpPage1 = () => {
    return (
        <div class="signUp-s1-wrapper d-flex justify-content-center align-items-center">
            <div className='signUp-s1 d-flex justify-content-center align-items-start flex-column'>
                <HeaderSigup step='1'
                    nameStep='Setup Your Account'
                    title='Setup Your Account'
                    des='🤘Let’s start your Podcast journey'
                    />
                <div  className='signUp-s1-main'>
                    <div class="signUp-s1-info d-flex justify-content-center align-items-center">
                        <div>
                            <h4>First Name</h4>
                            <input type='text' placeholder='First Name'/>
                        </div>
                        <div>
                            <h4>Last Name</h4>
                            <input type='text' placeholder='Last Name'/>
                        </div>
                    </div>
                    <div class="signUp-s1-email">
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
