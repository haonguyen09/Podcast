import React from 'react'
import MedalIcon from '../../asset/icons/MedalIcon';
import img from '../../asset/images/podcast1.webp'

const LeaderboardPage = () => {
    const columns = [
        { header: '#', accessor: 'id' },
        { header: 'Name', accessor: 'Name' },
        { header: 'Comments', accessor: 'Comments' },
        { header: 'Rating', accessor: 'Rating' },
        { header: 'Views', accessor: 'Views' },
        { header: 'Action', accessor: 'Action' },
        ];

        const data = [
        {
            id: <MedalIcon/>,
            Name: <div className='d-flex align-items-center'>
                    <img className="subscribers-img" src={img} alt='img' />
                    <h3 className="subscribers-title text-start">Rich Roll Podcast</h3>
                </div>,
            Comments: <div className='d-flex align-items-center'>
                        <MessageIcon/>
                        <span>2.4k</span>
                    </div>,
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
