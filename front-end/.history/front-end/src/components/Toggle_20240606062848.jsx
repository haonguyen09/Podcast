import React, { useState } from 'react'

const Toggle = ({ id, onToggle }) => {
    const [active, setActive] = useState(false)

    const handleToggle = () => {
        const newStatus = !active
        setActive(newStatus)
        onToggle(id, newStatus)
    }

    return (
        <div className={`toggle ${active ? 'active' : ''}`} onClick={handleToggle}>
            <div className='toggle-spinner'></div>
        </div>
    )
}

export default Toggle

