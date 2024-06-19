import React, { useEffect, useState } from 'react'
import CheckBoxCustom from '../../components/CheckBoxCustom';
import img from '../../asset/images/podcast1.webp'
import TableComponent from '../../components/TableComponent';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { getDetailsUser } from '../../services/UserService';

const SubcribersPage = () => {
    const user = useSelector(state => state.user)
    const token = user.access_token
    let decoded

    const [listFollower, setListFollower] = useState([])

    useEffect(() => {
        const fetchFollower = async () => {
            decoded = jwtDecode(token)
            const response = await getDetailsUser(decoded?.id)
            console.log("response", response)
            setListFollower(response.followerId.followers)
        }

        fetchFollower()
    }, [token])

    const handleFollow = async () => {
        
    }


    const columns = [
        { header: <CheckBoxCustom/>, accessor: 'id' },
        { header: 'Name', accessor: 'Name' },
        { header: 'Email', accessor: 'Email' },
        { header: 'Badge', accessor: 'Badge' },
        { header: 'Karma', accessor: 'Karma' },
        { header: 'Action', accessor: 'Action' },
        ];

    const data = listFollower.map(item => ({
            id: <input type="checkbox" />,
            Name: (
            <div className='d-flex align-items-center'>
                <img className="subscribers-img" src={`/uploads/${item.avatar}`} alt='img' />
                <h3 className="subscribers-title text-start">{`${item.firstName}${item.lastName}`}</h3>
            </div>
            ),
            Email: 'haonguyen09450@gmail.com',
            Badge: <button className='button button--pink'>Producer</button>,
            Karma: '23',
            Action: <button className="button button--orangebg" onClick={() => handleFollow(item._id)}>Follow</button>,
        })) 

    return (
        <div className='subscribers'>
            <div className='subscribers-header d-flex justify-content-between align-items-center'>
                <h2 className='heading subscribers-heading text-start'>subscribers</h2>
            </div>
            <TableComponent columns={columns} data={ data } />
        </div>
    )
}

export default SubcribersPage
