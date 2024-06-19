import React from 'react'

const CreateTeamPage = () => {
    return (
        <div className='createTeam'>
            <h2 className='heading createTeam-heading'>Create new team</h2>
            <div className='createTeam-name'>
                <h4>Name</h4>
                <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)}
            </div>
        </div>
    )
}

export default CreateTeamPage
