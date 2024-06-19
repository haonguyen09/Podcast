import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Feed = () => {
    return (
        <div className='feed'>
            <div className='feed-header'>
                <Nav variant="tabs" defaultActiveKey="#" className='feed-tab'>
                    <Nav.Item>
                        <Nav.Link href="#">My Feed</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Popular</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Recent</Nav.Link>
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
