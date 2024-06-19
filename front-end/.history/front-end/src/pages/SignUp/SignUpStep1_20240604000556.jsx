import React from 'react'
import CheckBoxCustom from '../../components/CheckBoxCustom'

const SignUpStep1 = () => {
  return (
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
      <div className='d-flex align-items-start justify-content-center'>
        <CheckBoxCustom />
        <p className='signUp-s1-checkbox'>By continuing to the next step, you agree to gocast’s <span>privacy policy</span> and <span>terms of use</span></p>
      </div>
  </div>
  )
}

export default SignUpStep1
