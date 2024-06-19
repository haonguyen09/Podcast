import React from 'react'
import avatar from '../../asset/images/Image.png'

const Popular = () => {
    return (
        <>
            <h2 className='host-heading text-start'>Popular Hosts</h2>
            <ul className='host-list d-flex align-items-center justify-content-between'>
                <li className='host-item'>
                    <div className='host-avatar align-items-center justify-content-between '>
                        <img src={avatar} alt='avatar'/>
                    </div>
                    <span className='host-name'>Thomas</span>
                </li>
                <li className='host-item'>
                    <div className='host-avatar align-items-center justify-content-between '>
                        <img src={avatar} alt='avatar'/>
                    </div>
                    <span className='host-name'>Thomas</span>
                </li>
                <li className='host-item'>
                    <div className='host-avatar align-items-center justify-content-between '>
                        <img src={avatar} alt='avatar'/>
                    </div>
                    <span className='host-name'>Thomas</span>
                </li>
                <li className='host-item'>
                    <div className='host-avatar align-items-center justify-content-between '>
                        <img src={avatar} alt='avatar'/>
                    </div>
                    <span className='host-name'>Thomas</span>
                </li>
            </ul>
        </>
    )
}

export default Popular
