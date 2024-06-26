import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Header = () => {
  return (
    <>
      <InputGroup size="lg" className="mb-3">
        <InputGroup.Text id="basic-addon1">
        <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search 2+ million podcasts and listeners"
          aria-label="Search 2+ million podcasts and listeners"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  )
}

export default Header