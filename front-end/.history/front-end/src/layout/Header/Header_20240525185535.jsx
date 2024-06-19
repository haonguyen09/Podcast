import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Header = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  )
}

export default Header