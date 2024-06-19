import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const Header = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
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