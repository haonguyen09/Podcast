import React from 'react'
import CheckBoxCustom from '../../components/CheckBoxCustom';

const TeamDetailsPage = () => {

    const columns = [
        { header: <CheckBoxCustom/>, accessor: 'id' },
        { header: 'Email', accessor: 'Email' },
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
        <div>
        
        </div>
    )
}

export default TeamDetailsPage
