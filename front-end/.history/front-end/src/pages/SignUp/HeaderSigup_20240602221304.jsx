import React from 'react'
import logo from '../../asset/images/Logo.png'

const HeaderSigup = ({step, nameStep, }) => {
    return (
        <>
            <div className='width-full signUp-s1-img'>
                <img src={logo} />
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
            </div>
        </>
    )
}

export default HeaderSigup
