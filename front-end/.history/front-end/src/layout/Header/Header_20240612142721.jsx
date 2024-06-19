import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import iconUpload from '../../asset/images/cloud-upload.png'
import iconMessage from '../../asset/images/message-text.png'
import iconNoti from '../../asset/images/Notification.png'
import avatar from '../../asset/images/podcast1.webp'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { getDetailsUser, logoutUser } from '../../services/UserService';
import { resetUser } from '../../redux/Slice';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  console.log("user", user)
  const token = user?.access_token;
  console.log("token", token)

  const [userDetails, setUserDetails] = useState([])


  useEffect(() => {
    const fetchDetailsUser = async () => {
      if (token) {
        try {
            const decoded = jwtDecode(token)
            const response = await getDetailsUser(decoded?.id)
            // console.log("response", response)
            setUserDetails(response.data)
        } catch (error) {
            console.error(error)
        }
      }
    }

    fetchDetailsUser()
  }, [token])

  const handleSignUp = () => {
    navigate('/sign-up')
  }

  const handleSignIn = () => {
    navigate('/sign-in')
  }

  const handleCreate = () => {
    navigate('/episodes/create')
  }

  const handleLogout = async () => {
    try {
        await logoutUser();
        dispatch(resetUser());
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/');
    } catch (error) {
        console.error('Failed to log out:', error);
    }
}

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
        <div className='button button--primary button-upload d-flex align-items-center' onClick={handleCreate}>
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
        {
          userDetails?
            (
              
              <Dropdown>
                  <Dropdown.Toggle>
                  <a  className='profile'>
                    <img src={`/uploads/${userDetails.avatar}`} alt='avatar' />
                  </a>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                      <Dropdown.Item
                          onClick={handleLogout}
                          active
                      >
                          Logout
                      </Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            ) :
          (<div className='d-flex justify-content-between align-items-center'>
            <button className='button button--primary' onClick={handleSignUp} style={{marginRight:'15px'}}>Sign Up</button>
            <button className='button button--primary' onClick={handleSignIn}>Sign In</button>
          </div>)
            
        }
      </div>
    </div>
  )
}

export default Header