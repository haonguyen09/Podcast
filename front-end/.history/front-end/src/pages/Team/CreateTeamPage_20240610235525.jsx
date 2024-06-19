import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const CreateTeamPage = () => {

    const user = useSelector(state => state.user)
    const token = user.access_token

    const [name, setName] = useState()

    return (
        <div className='createTeam'>
            <h2 className='heading createTeam-heading'>Create new team</h2>
            <div className='createTeam-name'>
                <h4>Name</h4>
                <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div className='createTeam-members'>
                <h4>Name</h4>
                <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
            </div>
        </div>
    )
}

export default CreateTeamPage
