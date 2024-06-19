import React, { useState, useEffect } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import { getAllPlaylist } from '../services/PlaylistService';

const PlaylistModal = (props) => {
    const { showModal, handleClose, handleCreateNewPlaylist, userId, podcastId } = props;
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const result = await getAllPlaylist();
                setPlaylists(result.data);
            } catch (error) {
                console.error('Error fetching playlists', error);
            }
        };

        if (showModal) {
            fetchPlaylists();
        }
    }, [showModal]);

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Choose or Create Playlist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    {playlists.map(playlist => (
                        <ListGroup.Item key={playlist.id}>{playlist.name}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCreateNewPlaylist}>
                    Create New Playlist
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PlaylistModal;
