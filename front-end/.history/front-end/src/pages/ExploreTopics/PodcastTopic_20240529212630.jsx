import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const PodcastTopic = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">explore-topics</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>religion</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default PodcastTopic
