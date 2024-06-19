import React from 'react'
import avatar from '../../asset/images/Image.png'

const Popular = () => {
    return (
        <>
            <h2 className='heading host-heading text-start'>Popular Hosts</h2>
            <ul className='host-list d-flex align-items-center justify-content-between'>
                <li className='host-item'>
                    <a href="#">
                        <div className='host-avatar align-items-end justify-content-center '>
                            <img src={avatar} alt='avatar'/>
                        </div>
                        <span className='host-name'>Thomas</span>
                    </a>
                </li>
                <li className='host-item'>
                    <a href="#">
                        <div className='host-avatar align-items-end justify-content-center '>
                            <img src={avatar} alt='avatar'/>
                        </div>
                        <span className='host-name'>Thomas</span>
                    </a>
                </li>
                <li className='host-item'>
                    <a href="#">
                        <div className='host-avatar align-items-end justify-content-center '>
                            <img src={avatar} alt='avatar'/>
                        </div>
                        <span className='host-name'>Thomas</span>
                    </a>
                </li>
                <li className='host-item'>
                    <a href="#">
                        <div className='host-avatar align-items-end justify-content-center '>
                            <img src={avatar} alt='avatar'/>
                        </div>
                        <span className='host-name'>Thomas</span>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Popular
