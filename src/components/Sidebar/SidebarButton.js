import React from 'react'
import { Link } from 'react-router-dom'

function SidebarButton({icon, title, to}) {
    return (
        <>
            <Link to={to} className="link">
                <li className={`sidebar-list-item ${title === 'Home' ? 'active' : ''}`}>
                    {icon}
                    {title}
                </li> 
            </Link>
        </>
    )
}

export default SidebarButton
