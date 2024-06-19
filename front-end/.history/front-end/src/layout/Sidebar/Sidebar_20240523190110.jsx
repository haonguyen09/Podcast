import React from 'react'
import logo from '../../asset/images/Logo.png'

const Sidebar = () => {
    return (
        <div>
            <a className='logo' href='/'>
                <img srcSet={`${logo} 2x`} alt='gocastUI'/> 
            </a>
        </div>
    )
}

export default Sidebar
