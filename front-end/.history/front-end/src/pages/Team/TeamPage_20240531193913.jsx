import React from 'react'
import TableComponent from '../../components/TableComponent';

const TeamPage = () => {
    const columns = [
        { header: <CheckBoxCustom/>, accessor: 'id' },
        { header: 'Thumbnail', accessor: 'Thumbnail' },
        { header: 'Name', accessor: 'Name' },
        { header: 'Duration', accessor: 'Duration' },
        { header: 'Audio Status', accessor: 'AudioStatus' },
        { header: 'Publish Date', accessor: 'PublishDate' },
        { header: 'Status', accessor: 'Status' },
        { header: 'Action', accessor: 'Action' },
        ];

        const data = [
        {
            id: <input type="checkbox" />,
            Thumbnail: <img src={img} className="episodes-img d-flex" alt="Thumbnail" />,
            Name: (
            <>
                <h3 className="episodes-title text-start">Change Your Brain: Neuroscientist Dr. Andrew Huberman</h3>
                <span className="episodes-sub text-start d-block">Rich Roll Podcast</span>
            </>
            ),
            Duration: '02:10:25',
            AudioStatus: 'Done',
            PublishDate: 'July 3, 2022 2:24',
            Status: <button className="button button--secondary">Published</button>,
            Action: <EditIcon />,
        },
    ];
    

    return (
        <div className='team'>
            <div className='team-header d-flex justify-content-between align-items-center'>
                <h2 className='heading team-heading text-start'>Team</h2>
                <button className='button button--secondary button-team'>
                    <span>Create team</span>
                </button>
            </div>
            <TableComponent columns={columns} data={ data } />
        </div>
    )
}

export default TeamPage
