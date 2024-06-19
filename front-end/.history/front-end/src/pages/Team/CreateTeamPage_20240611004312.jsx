import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import img from '../../asset/images/podcast1.webp'

const CreateTeamPage = () => {

    const user = useSelector(state => state.user)
    const token = user.access_token

    const [name, setName] = useState()

    return (
        <div className='createTeam text-start'>
            <h2 className='heading createTeam-heading'>Create new team</h2>
            <div className='createTeam-name'>
                <h4>Name</h4>
                <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div className='createTeam-members'>
                <h4>Member</h4>
                <div className='createTeam-avatar-wrap'>
                    <div className="createTeam-item d-flex justify-content-between align-items-center">
                        <div className='createTeam-avatar d-flex align-items-center'>
                            <img src={img} />
                            <h5>Axel</h5>
                        </div>
                        <button className='button button--primary'>Invite</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTeamPage
