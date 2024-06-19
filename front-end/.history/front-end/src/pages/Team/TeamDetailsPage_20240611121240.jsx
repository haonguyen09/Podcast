import React, { useEffect, useState } from 'react'
import CheckBoxCustom from '../../components/CheckBoxCustom';
import TableComponent from '../../components/TableComponent';
import { useLocation } from 'react-router-dom';
import TeamCreateIcon from '../../asset/icons/TeamCreateIcon';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { getDetailsUser } from '../../services/UserService';
import { getDetailsTeam, updateTeam } from '../../services/TeamService';
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
    const [memberId, setMemberId] = useState("")
    const [teamData, setTeamData] = useState(dataTeam);

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
    }, [token, dataTeam.members])

    const fetchUpdatedTeamData = async () => {
        try {
            const response = await getDetailsTeam(dataTeam._id); // Adjust this according to your service
            if (response) {
                setTeamData(response.data); // Update the state with the new team data
            }
        } catch (error) {
            console.error("Error fetching updated team data:", error);
        }
    };
    
    const handleInvite = (id, event) => {
        event.preventDefault();  // Prevent default form submission behavior
        setListInvite(prev => {
            const newSet = new Set(prev)
            if (newSet.has(id)) {
                newSet.delete(id)
            } else {
                newSet.add(id)
            }
            return newSet
        })
    }

    const handleInviteSubmit = async () => {
        const newMembers = Array.from(listInvite);
        const existingMemberIds = dataTeam.members.map(member => member._id);
        const updatedMemberIds = [...existingMemberIds, ...newMembers];
        
        const data = { members: updatedMemberIds };

        try {
            const response = await updateTeam(dataTeam._id, data);
            if (response) {
                toast.success("Invite member successful!");
                await fetchUpdatedTeamData();
                setShowModal(false);
            } else {
                toast.error("Invite member failed!");
            }
        } catch (error) {
            toast.error("Invite member failed!");
            console.error(error);
        }
    };

    const handleRemove = (id) => {
        const updatedMembers = dataTeam.members.filter(member => member._id !== id).flatMap(item => item._id)
        console.log("updatedMembers",updatedMembers)
        const response = updateTeam(dataTeam._id, { members: updatedMembers })
        if (response) {
            toast.success("Remove member successful!")
            await fetchUpdatedTeamData();
        } else {
            toast.error("Remove member failed!")
        }
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
            id: <input type="checkbox" value={memberId} onChange={() => setMemberId(member._id)}/>,
            Email: <h6>{member.email}</h6>,
            Role: member.role,
            Date: new Date(member.createdAt).toLocaleString(),
            Status: 'Can’t Resend yet',
            Action: <button className="button button--orange" onClick={() => handleRemove(member._id)}>Remove invite</button>,
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
                                            <img src={`/uploads/${item.avatar}`} />
                                            <h5>{`${item.firstName}${item.lastName}`}</h5>
                                        </div>
                                        <button className='button button--primary' onClick={(e) => handleInvite(item._id, e)}>
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
