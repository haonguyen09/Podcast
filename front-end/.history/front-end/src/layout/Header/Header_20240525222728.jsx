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
    <div className='header d-flex justify-content-between'>
      <InputGroup size="lg" className="mb-3 search">
        <InputGroup.Text id="basic-addon1">
        <FontAwesomeIcon icon={faSearch}  className='color-gray'/>
        </InputGroup.Text>
        <Form.Control
          className='color-gray'
          placeholder="Search 2+ million podcasts and listeners"
        />
      </InputGroup>

      <div className='header-right d-flex align-items-center'>
        <div className='button button-upload'>
          <img src={iconUpload} alt='button-upload' />
          <span>Upload</span>
        </div>
        <a href='#' className='header-message'>
          <img src={iconMessage} alt='message' />
          <span>0</span>
        </a>
        <a href='#' className='header-noti'>
          <img src={iconNoti} alt='noti' />
          <span>0</span>
        </a>
        <a href='#' className='profile'>
          <img src={avatar} alt='avatar' />
        </a>
      </div>
    </div>
  )
}

export default Header