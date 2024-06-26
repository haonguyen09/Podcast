import React, { useEffect, useState } from 'react'
import MedalIcon from '../../asset/icons/MedalIcon';
import img from '../../asset/images/podcast1.webp'
import StartFullIcon from '../../asset/icons/StartFullIcon';
import MessageIcon from '../../asset/icons/MessageIcon';
import ViewIcon from '../../asset/icons/ViewIcon';
import TableComponent from '../../components/TableComponent';
import { getAllPodcast } from '../../services/PodcastService';

const LeaderboardPage = () => {

    const [listUser, setListUser] = useState([])

    useEffect(() => {
        const fetchListUser = async () => {
            const response = await getAllPodcast()
            const sort = response.data.sort((a, b) => b.ratingCount - a.ratingCount)
            // console.log("response", sort.slice(0, 6))
            setListUser(sort.slice(0, 6))
        }
        fetchListUser()
    }, [])

    const columns = [
        { header: '#', accessor: 'id' },
        { header: 'Name', accessor: 'Name' },
        { header: 'Comments', accessor: 'Comments' },
        { header: 'Rating', accessor: 'Rating' },
        { header: 'Views', accessor: 'Views' },
        { header: 'Action', accessor: 'Action' },
        ];

    const data = listUser.map(item => ({
        id: <MedalIcon/>,
        Name: <div className='d-flex align-items-center'>
                <img className="leader-img" src={`${process.env.REACT_APP_BACKEND}/uploads/${item.userId.avatar}`} alt='img' />
                <div class="leader-avatar-info  text-start">
                    <h3 className="leader-title">{`${item.userId.firstName}${item.userId.lastName}`}</h3>
                    <span>{item.userId.role}</span>
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
        }))
    

    return (
        <div className='team'>
            <div className='team-header d-flex justify-content-between align-items-center'>
                <h2 className='heading team-heading text-start'>Leaderboard</h2>
            </div>
            <TableComponent columns={columns} data={ data } />
        </div>
    )
}


export default LeaderboardPage
