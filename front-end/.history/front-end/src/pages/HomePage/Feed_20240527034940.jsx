import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Feed = () => {
    return (
        <div className='feed'>
            <div className='feed-header'>
                <Nav variant="tabs" defaultActiveKey="/home" className='feed-tab'>
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                        Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className='feed-toggle'
            </div>
            <div className='feed-main'>
                <div className='feed-item'></div>
            </div>
        </div>
    )
}

export default Feed
