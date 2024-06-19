import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import iconUpload from '../../asset/images/cloud-upload.png'
import iconMessage from '../../asset/images/message-text.png'
import iconNoti from '../../asset/images/Notification.png'

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

      <div className='header-right'>
        <div className='button button-upload'>
          <img src={iconUpload} alt='button-upload' />
          <span>Upload</span>
        </div>
        <div className='button-message'>
          <img src={iconMessage} alt='button-message' />
          <span>0</span>
        </div>
        <div className='button-noti'>
          <img src={iconNoti} alt='button-noti' />
          <span>0</span>
        </div>

      </div>
    </div>
  )
}

export default Header