import React from 'react'
import SidebarButton from './SidebarButton';
import './Sidebar.scss'

function SidebarMenu({title, buttons}) {
    return (
        <div className="sidebar-menu">
            <h3 className="sidebar-title">{title}</h3>
            <ul className="sidebar-list">
                {
                    buttons.map( (button) => (
                        <SidebarButton key={button.title} icon={button.icon} title={button.title} to={button.to}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default SidebarMenu
  