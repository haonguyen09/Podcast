import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import iconUpload from '../../asset/images/cloud-upload.png'

const Header = () => {
  return (
    <div className='header d-flex justify-content-between'>
      <InputGroup size="lg" className="mb-3 search">
        <InputGroup.Text id="basic-addon1">
        <FontAwesomeIcon icon={faSearch}  className='color-gray'/>
        </InputGroup.Text>
        <Form.Control
          className='color-gray flex-grow-1'
          placeholder="Search 2+ million podcasts and listeners"
          aria-label="Search 2+ million podcasts and listeners"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <div className='header-right'>
        <div className='button button-upload'>
          <img src={iconUpload} alt='button-upload' />
          <span>Upload</span>
        </div>
      </div>
    </div>
  )
}

export default Header