import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

const ModelCreatePlaylist = (props) => {

    const { showModal, handleClose  } = props

    
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
                        // value={newPlaylistName}
                        // onChange={(e) => setNewPlaylistName(e.target.value)}
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
