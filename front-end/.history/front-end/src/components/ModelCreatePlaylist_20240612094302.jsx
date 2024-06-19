import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { printFile } from '../utils/printFile';

const ModelCreatePlaylist = (props) => {

    const { showModal, handleClose, userId, podcastId } = props
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        printFile(file, setImagePreview)
    };

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
                <Form.Group controlId="formPlaylistName">
                    <Form.Label>Playlist Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter playlist description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
