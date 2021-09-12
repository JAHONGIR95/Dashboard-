import React from 'react'
import { NavLink } from 'react-router-dom'

function SidebarButton({icon, title, to}) {
    return (
        <>
            <NavLink to={to} className="sidebar-list-item link" activeClassName="is-active" exact >
                <li className="sidebar-links">
                    {icon}
                    {title}
                </li> 
            </NavLink>
        </>
    )
}

export default SidebarButton
