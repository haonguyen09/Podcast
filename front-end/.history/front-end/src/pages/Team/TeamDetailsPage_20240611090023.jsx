import React, { useEffect, useState } from 'react'
import CheckBoxCustom from '../../components/CheckBoxCustom';
import TableComponent from '../../components/TableComponent';
import { useLocation } from 'react-router-dom';
import TeamCreateIcon from '../../asset/icons/TeamCreateIcon';
import { Modal, Button, Form } from 'react-bootstrap';

const TeamDetailsPage = () => {
    const location = useLocation()
    const dataTeam = location.state.item
    
    const [showModal, setShowModal] = useState(false)
    const [inviteEmail, setInviteEmail] = useState('')

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)
    const handleInviteChange = (e) => setInviteEmail(e.target.value)
    const handleInviteSubmit = () => {
        // Logic to invite member by email
        console.log('Invite email:', inviteEmail)
        setInviteEmail('')
        setShowModal(false)
    }

    useEffect(() => {
        const fetchListMember = async () => {
            
        }

        fetchListMember()
    })

    const columns = [
        { header: <CheckBoxCustom/>, accessor: 'id' },
        { header: 'Email', accessor: 'Email' },
        { header: 'Role', accessor: 'Role' },
        { header: 'Date', accessor: 'Date' },
        { header: 'Status', accessor: 'Status' },
        { header: 'Action', accessor: 'Action' },
        ];

    const data = dataTeam.members.map((member) => ({
            id: <input type="checkbox" />,
            Email: <h6>{member.email}</h6>,
            Role: member.role,
            Date: new Date(member.createdAt).toLocaleString(),
            Status: 'Can’t Resend yet',
            Action: <button className="button button--orange">Remove invite</button>,
        }))

    return (
        <>
            <div className='team-header d-flex justify-content-between align-items-center'>
                <h2 className='heading team-heading text-start'>Members</h2>
                <button className='button button--secondary button-team' onClick={handleShowModal}>
                    <TeamCreateIcon/>
                    <span>Invite member</span>
                </button>
            </div>
            <TableComponent columns={columns} data={data} />
            
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Invite Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formInviteEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                value={inviteEmail} 
                                onChange={handleInviteChange} 
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleInviteSubmit}>
                        Invite
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TeamDetailsPage
