import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import iconUpload from '../../asset/images/cloud-upload.png'
import iconMessage from '../../asset/images/message-text.png'
import iconNoti from '../../asset/images/Notification.png'
import avatar from '../../asset/images/podcast1.webp'

const Header = () => {
  return (
    <div className='header d-flex justify-content-between align-items-center'>
      <InputGroup size="lg" className="search">
        <InputGroup.Text id="basic-addon1">
        <FontAwesomeIcon icon={faSearch}  className='color-gray'/>
        </InputGroup.Text>
        <Form.Control
          className='header-input'
          placeholder="Search 2+ million podcasts and listeners"
        />
      </InputGroup>

      <div className='header-right d-flex align-items-center'>
        <div className='button button--primary button-upload d-flex align-items-center'>
          <img src={iconUpload} alt='button-upload' />
          <span>Upload</span>
        </div>
        <a href='#' className='header-message'>
          <img src={iconMessage} alt='message' />
          <span className='header-number'>0</span>
        </a>
        <a href='#' className='header-noti'>
          <img src={iconNoti} alt='noti' />
          <span className='header-number'>0</span>
        </a>
        <a href='#' className='profile'>
          <img src={avatar} alt='avatar' />
        </a>
        <div>
          <button className='button button--primary' onClick={handleSignUp}>Sign Up</button>
          <button className='button button--primary' onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Header