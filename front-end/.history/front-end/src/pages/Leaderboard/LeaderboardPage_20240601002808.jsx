import React from 'react'
import MedalIcon from '../../asset/icons/MedalIcon';
import img from '../../asset/images/podcast1.webp'
import StartFullIcon from '../../asset/icons/StartFullIcon';
import MessageIcon from '../../asset/icons/MessageIcon';
import ViewIcon from '../../asset/icons/ViewIcon';
import TableComponent from '../../components/TableComponent';

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
                    <img className="leader-img" src={img} alt='img' />
                    <div class="leader-avatar-info  text-start">
                        <h3 className="leader-title">Rich Roll Podcast</h3>
                        <span>Product Designer</span>
                    </div>
                </div>,
            Comments: <div className='d-flex align-items-center'>
                        <MessageIcon/>
                        <span className='leader-number'>2.4k</span>
                    </div>,
            Rating: <div className='d-flex align-items-center'>
                        <StartFullIcon/>
                        <span className='leader-number'>2.4k</span>
                    </div>,
            Views: <div className='d-flex align-items-center'>
                        <ViewIcon/>
                        <span className='leader-number'>2.4k</span>
                    </div>,
            Action: <button className="button button--orangebg">Follow</button>,
        },
    ];
    

    return (
        <div className='team'>
            <div className='team-header d-flex justify-content-between align-items-center'>
                <h2 className='heading team-heading text-start'>Team</h2>
            </div>
            <TableComponent columns={columns} data={ data } />
        </div>
    )
}


export default LeaderboardPage
