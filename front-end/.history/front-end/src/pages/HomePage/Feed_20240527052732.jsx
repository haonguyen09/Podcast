import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Feed = () => {

    const tabs = [{ name: 'My Feed', href: '/my-feed' }, { name: 'Popular', href: '#' }, { name: 'Recent', href: '#' }]
    
    return (
        <div className='feed'>
            <div className='feed-header d-flex justify-content-between align-items-center'>
                <Nav variant="tabs" defaultActiveKey="/my-feed" className='feed-tab'>
                    {
                        tabs.map((tab, index) => (
                            <Nav.Item key={index} className='feed-tab-item'>
                                <Nav.Link href={ tab.href } className='feed-tab-item-link'>{ tab.name }</Nav.Link>
                            </Nav.Item>
                        ))
                    }
                </Nav>
                <div className='feed-toggle d-flex align-items-center'>
                    <div className='toggle'>
                        <div className='toggle-spinner'></div>
                    </div>
                    <p>New Releases &amp; Guests Only</p>
                </div>
            </div>
            <div className='feed-main'>
                <div className='feed-item'></div>
            </div>
        </div>
    )
}

export default Feed
