import React from 'react'
import avatar from '../../asset/images/Image.png'

const Popular = () => {
    return (
        <>
            <h2 className='host-heading'>Popular Hosts</h2>
            <ul className='host-list'>
                <li className='host-item'>
                    <div className='host-avatar'>
                        <img src={avatar} alt='avatar'/>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Popular
