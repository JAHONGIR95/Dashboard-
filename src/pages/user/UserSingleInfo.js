import React from 'react'
import './user.scss'

function UserSingleInfo({ icon, infoTitle}) {
    return (
        <div className="user-show-info">
            {icon}
            <span className="user-show-info-title">{infoTitle}</span>
        </div>
    )
}

export default UserSingleInfo
