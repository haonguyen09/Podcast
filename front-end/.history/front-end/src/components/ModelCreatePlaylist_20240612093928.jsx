import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

const ModelCreatePlaylist = (props) => {

    const { showModal, handleClose, userId, podcastId } = props
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)

    
    const handleCreatePlaylist = async () => {

    }


    return (
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Choose or Create Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formPlaylistName">
                    <Form.Label>New Playlist Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter playlist name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleCreatePlaylist}>
                Create Playlist
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default ModelCreatePlaylist
