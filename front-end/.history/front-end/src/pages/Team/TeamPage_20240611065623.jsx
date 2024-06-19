import React, { useEffect, useState } from 'react'
import TableComponent from '../../components/TableComponent';
import CheckBoxCustom from '../../components/CheckBoxCustom';
import TeamCreateIcon from '../../asset/icons/TeamCreateIcon';
import { useNavigate } from 'react-router-dom';
import img from '../../asset/images/podcast1.webp'
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { getDetailsUser } from '../../services/UserService';

const TeamPage = () => {

    const navigate = useNavigate()

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

    const user = useSelector(state => state.user)
    const token = user.access_token
    const decoded = jwtDecode(token)

    const [listTeam, setListTeam] = useState([])
    

    useEffect(() => {
        const fetchListMember = async () => {
            if (token) {
                try {
                    const decoded = jwtDecode(token)
                    const memberDetail = await getDetailsUser(decoded?.id)
                    console.log("memberDetail", memberDetail)
                    setListTeam(memberDetail.data.teams)
                } catch (error) {
                    console.error(error)
                }
            }
        }
        fetchListMember()
    }, [token])

    const hanldeNavCreate = () => {
        navigate('/team/create')
    }

    const handleClick = (item) => {
        navigate('/team/details', {state: {item}})
    }
    

    return (
        <div className='team'>
            <div className='team-header d-flex justify-content-between align-items-center'>
                <h2 className='heading team-heading text-start'>Team</h2>
                <button className='button button--secondary button-team' onClick={hanldeNavCreate}>
                    <TeamCreateIcon/>
                    <span>Create team</span>
                </button>
            </div>
            <div className='team-main d-grid'>
                {
                    listTeam.map((team, index) => (
                        <div className='team-item text-start' key={index} onClick={()=>handleClick(team)}>
                            <h4>{ team.name}</h4>
                            <div className='team-member d-flex'>
                                {
                                    team.members.map(member => (
                                        <img src={`/uploads/${member.avatar}`}/>
                                    ))
                                }
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TeamPage
