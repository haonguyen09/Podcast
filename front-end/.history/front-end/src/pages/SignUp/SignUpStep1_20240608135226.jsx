import React, { useEffect, useRef, useState } from 'react'
import CheckBoxCustom from '../../components/CheckBoxCustom'
import { getObjectFromLocalStorage, updateObjectInLocalStorage } from '../../utils/handleLocalStorage'
import { createUser } from '../../services/UserService'

const SignUpStep1 = (props) => {

  const { currentStep, handleStepChange } = props
  
  const [email, setEmail] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [avatar, setAvatar] = useState()
  const avatarRef = useRef(null)

  const data = getObjectFromLocalStorage('signUpData');

  useEffect(() => {
    setEmail(data.email)
    setFirstName(data.firstName)
    setLastName(data.lastName)
    setAvatar(data.avatar.name)
  }, [])
  
  const handleNext = async () => {
    const avatarFile = avatarRef.current.files[0]
    handleStepChange(currentStep + 1);
    updateObjectInLocalStorage('signUpData', { email: email, firstName: firstName, lastName: lastName, avatar: avatarFile });
    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", data.password)
    formData.append("firstName", firstName)
    formData.append("lastName", lastName)
    formData.append("avatar", avatar)
    formData.append("role", "user")
    const response = await createUser(formData)
    console.log("responseUser", response)
  };

  return (
    <div  className='signUp-s1-main'>
      <div class="signUp-s1-info d-grid">
          <div>
              <h4>First Name</h4>
              <input type='text' placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
          </div>
          <div>
              <h4>Last Name</h4>
              <input type='text' placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)}/>
          </div>
          <div>
              <h4>Email</h4>
              <input type='text' placeholder='Your Email' value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div>
              <h4>Avatar</h4>
              <input type='file' ref={avatarRef}/>
          </div>
      </div>
      <div className='d-flex'>
        <CheckBoxCustom />
        <p className='signUp-s1-checkbox'>By continuing to the next step, you agree to gocast’s <span>privacy policy</span> and <span>terms of use</span></p>
      </div>
      <button className='button button--primary signUp-s1-button' onClick={handleNext}>Next</button>
  </div>
  )
}

export default SignUpStep1
