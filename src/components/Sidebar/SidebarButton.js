import React from 'react'

function SidebarButton({icon, title}) {
    return (
        <>
            <li className={`sidebar-list-item ${title === 'Home' ? 'active' : ''}`}>
                {icon}
                {title}
            </li> 
        </>
    )
}

export default SidebarButton
