import React, { useEffect, useState } from 'react'
import MedalIcon from '../../asset/icons/MedalIcon';
import img from '../../asset/images/podcast1.webp'
import StartFullIcon from '../../asset/icons/StartFullIcon';
import MessageIcon from '../../asset/icons/MessageIcon';
import ViewIcon from '../../asset/icons/ViewIcon';
import TableComponent from '../../components/TableComponent';
import { getAllPodcast } from '../../services/PodcastService';
import SilverMedal from '../../asset/icons/SilverMedal';
import BronzeMedal from '../../asset/icons/BronzeMedal';

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

    const data = listUser.map((item, index) => {
        let id;
        if (index === 0) {
            id = <MedalIcon />;
        } else if (index === 1) {
            id = <SilverMedal/>
        } else if (index === 2) {
            id = <BronzeMedal/>
        } else {
            id = index + 1;
        }

        return {
            id: id,
            Name: <div className='d-flex align-items-center'>
                    <img className="leader-img" src={`/uploads/${item.userId.avatar}`} alt='img' />
                    <div class="leader-avatar-info  text-start">
                        <h3 className="leader-title">{`${item.userId.firstName}${item.userId.lastName}`}</h3>
                        <span>{item.userId.role}</span>
                    </div>
                </div>,
            Comments: <div className='d-flex align-items-center'>
                        <MessageIcon/>
                        <span className='leader-number'>0</span>
                    </div>,
            Rating: <div className='d-flex align-items-center'>
                        <StartFullIcon/>
                        <span className='leader-number'>{item.ratingCount}</span>
                    </div>,
            Views: <div className='d-flex align-items-center'>
                        <ViewIcon/>
                        <span className='leader-number'>{item.viewsCount}</span>
                    </div>,
            Action: <button className="button button--orangebg" onClick={handleFollow}>Follow</button>,
        }

        })
    

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
