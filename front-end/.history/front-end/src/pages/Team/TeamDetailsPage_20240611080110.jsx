import React from 'react'
import CheckBoxCustom from '../../components/CheckBoxCustom';
import TableComponent from '../../components/TableComponent';
import { useLocation } from 'react-router-dom';
import TeamCreateIcon from '../../asset/icons/TeamCreateIcon';

const TeamDetailsPage = () => {
    const location = useLocation()
    const dataTeam = location.state.item
    console.log("dataTeam", dataTeam)

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
                <h2 className='heading team-heading text-start'>Team</h2>
                <button className='button button--secondary button-team' onClick={hanldeNavCreate}>
                    <TeamCreateIcon/>
                    <span>Create team</span>
                </button>
            </div>
            <TableComponent columns={columns} data={ data } />
        </>
    )
}

export default TeamDetailsPage
