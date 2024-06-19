import React from 'react'
import logo from '../../asset/images/Logo.png'

const Sidebar = () => {
    return (
        <div>
            <a className='logo' href='/'>
                <img src={logo} alt='gocastUI'/> 
            </a>
        </div>
    )
}

export default Sidebar
