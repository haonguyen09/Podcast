import React, { useState, useEffect } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import { getAllPlaylist, updatePlaylist } from '../services/PlaylistService';

const PlaylistModal = (props) => {
    const { showModal, handleClose, handleCreateNewPlaylist, userId, podcastId } = props;
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const result = await getAllPlaylist();
                console.log("result", result)
                const filter = result.data.filter(item => item.userId._id === userId && item.podcasts.some(podcast => podcast._id === podcastId))
                console.log("filter", filter)
                setPlaylists(filter);
            } catch (error) {
                console.error('Error fetching playlists', error);
            }
        };

        if (showModal) {
            fetchPlaylists();
        }
    }, [showModal, userId, podcastId]);

    const handlePlaylist = async(id) => {
        const response = await updatePlaylist(id, {podcasts: podcastId})
    }

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Choose or Create Playlist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    {playlists.map(playlist => (
                        <ListGroup.Item key={playlist._id} onClick={() => handlePlaylist(playlist._id)} style={{cursor: 'pointer'}}>{playlist.title}</ListGroup.Item>
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
