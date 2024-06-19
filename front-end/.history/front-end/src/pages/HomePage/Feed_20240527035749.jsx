import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Feed = () => {

    const tabs = [{ name: 'My Feed', href: '#' }, { name: 'Popular', href: '#' }, { name: 'Recent', href: '#' }]
    
    return (
        <div className='feed'>
            <div className='feed-header'>
                <Nav variant="tabs" defaultActiveKey="#" className='feed-tab'>
                    {
                        tabs.forEach((tab, index) => (
                            <Nav.Item key={index}>
                                <Nav.Link href={ tab.href }>{ tab.name }</Nav.Link>
                            </Nav.Item>
                        ))
                    }
                    <Nav.Item>
                        <Nav.Link href="#">Popular</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Recent</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className='feed-toggle'>
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
