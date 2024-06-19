import React from 'react'
import TableComponent from '../../components/TableComponent';
import CheckBoxCustom from '../../components/CheckBoxCustom';
import TeamCreateIcon from '../../asset/icons/TeamCreateIcon';
import { useNavigate } from 'react-router-dom';
import img from '../../asset/images/podcast1.webp'

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

    const hanldeNavCreate = () => {
        navigate('/team/create')
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
                <div className='team-item'>
                    <h4>Team Design</h4>
                    <div className='team-member d-flex'>
                        <img src={img}/>
                        <img src={img}/>
                        <img src={img}/>
                        <img src={img}/>
                        <img src={img}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamPage
