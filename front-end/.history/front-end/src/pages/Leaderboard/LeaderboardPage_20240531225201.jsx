import React from 'react'

const LeaderboardPage = () => {
    const columns = [
        { header: '#', accessor: 'id' },
        { header: 'Name', accessor: 'Name' },
        { header: 'Role', accessor: 'Role' },
        { header: 'Date', accessor: 'Date' },
        { header: 'Status', accessor: 'Status' },
        { header: 'Action', accessor: 'Action' },
        ];

        const data = [
        {
            id: <input type="checkbox" />,
            Email: <h6>uihutofficial@gmail.com</h6>,
            Role: 'Producer',
            Date: '16 Jul 2022',
            Status: 'Can’t Resend yet',
            Action: <button className="button button--orange">Remove invite</button>,
        },
    ];
    

    return (
        <div className='team'>
            <div className='team-header d-flex justify-content-between align-items-center'>
                <h2 className='heading team-heading text-start'>Team</h2>
                <button className='button button--secondary button-team'>
                    <TeamCreateIcon/>
                    <span>Create team</span>
                </button>
            </div>
            <TableComponent columns={columns} data={ data } />
        </div>
    )
}


export default LeaderboardPage
