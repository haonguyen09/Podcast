import React, { useEffect, useState } from 'react'
import CheckBoxCustom from '../../components/CheckBoxCustom';
import TableComponent from '../../components/TableComponent';
import { useLocation } from 'react-router-dom';
import TeamCreateIcon from '../../asset/icons/TeamCreateIcon';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { getDetailsUser } from '../../services/UserService';
import { updateTeam } from '../../services/TeamService';
import { toast } from 'react-toastify';

const TeamDetailsPage = () => {
    const location = useLocation()
    const dataTeam = location.state.item
    console.log("dataTeam", dataTeam)
    const user = useSelector(state => state.user)
    const token = user.access_token
    
    
    const [showModal, setShowModal] = useState(false)
    const [listMember, setListMember] = useState([])
    const [listInvite, setListInvite] = useState(new Set())
    const [memberId, setMemberId] = useState(new Set())

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)
    

    useEffect(() => {
        const fetchListMember = async () => {
            try {
                const decoded = jwtDecode(token)
                const memberDetail = await getDetailsUser(decoded?.id)
                const existingMemberIds = new Set(dataTeam.members.map(member => member._id));
                const listFollowing = memberDetail.data.followingId.followings.filter(item => !existingMemberIds.has(item._id));
                setListMember(listFollowing)
            } catch (error) {
                console.error(error)
            }
        }

        fetchListMember()
    }, [token])
    
    const handleInvite = (id) => { 
        setListInvite(prev => {
            const newSet = new Set(prev)
            if (newSet.has(id)) {
                newSet.delete(id)
            } else {
                newSet.add(id)
            }
            // console.log("newSet", newSet)
            return newSet
        })
    }

    const handleInviteSubmit = () => {
        const data = {
            members: Array.from(listInvite)
        }
        const response = updateTeam(dataTeam._id, data)
        if (response) {
            toast.success("Invite member successful!")
        } else {
            toast.error("Invite member failed!")
        }
        setShowModal(false)
    }

    const handleRemove = () => {
        
    }

    const columns = [
        { header: <CheckBoxCustom/>, accessor: 'id' },
        { header: 'Email', accessor: 'Email' },
        { header: 'Role', accessor: 'Role' },
        { header: 'Date', accessor: 'Date' },
        { header: 'Status', accessor: 'Status' },
        { header: 'Action', accessor: 'Action' },
        ];

    const data = dataTeam.members.map((member) => ({
            id: <input type="checkbox" value={memberId} onChange={setMemberId(member._id)}/>,
            Email: <h6>{member.email}</h6>,
            Role: member.role,
            Date: new Date(member.createdAt).toLocaleString(),
            Status: 'Can’t Resend yet',
            Action: <button className="button button--orange" onClick={handleRemove}>Remove invite</button>,
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
                            <Form.Label>Member</Form.Label>
                            {
                                listMember.map((item, index) => (
                                    <div className="createTeam-item d-flex justify-content-between align-items-center" key={index}>
                                        <div className='createTeam-avatar d-flex align-items-center'>
                                            <img src={`${process.env.REACT_APP_BACKEND}/uploads/${item.avatar}`} />
                                            <h5>{`${item.firstName}${item.lastName}`}</h5>
                                        </div>
                                        <button className='button button--primary' onClick={() => handleInvite(item._id)}>
                                            {listInvite.has(item._id) ? 'Uninvite' : 'Invite'}
                                        </button>
                                    </div>
                                ))
                            }
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleInviteSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TeamDetailsPage
