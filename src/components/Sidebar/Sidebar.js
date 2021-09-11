import React from 'react'
import './Sidebar.scss'
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report
} from '@material-ui/icons'
import SidebarMenu from './SidebarMenu'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">                   
                <SidebarMenu title="Dashboard" buttons={[
                    {icon: <LineStyle className="sidebar-icon"/>, title: 'Home'},
                    {icon: <Timeline className="sidebar-icon"/>, title: 'Analytics'},
                    {icon: <TrendingUp className="sidebar-icon"/>, title: 'Sales'},
                ]}/>
                <SidebarMenu title="Quick Menu" buttons={[
                    {icon: <PermIdentity className="sidebar-icon"/>, title: 'Users'},
                    {icon: <Storefront className="sidebar-icon"/>, title: 'Products'},
                    {icon: <AttachMoney className="sidebar-icon"/>, title: 'Transactions'},
                    {icon: <BarChart className="sidebar-icon"/>, title: 'Reports'},
                ]}/>
                <SidebarMenu title="Notifications" buttons={[
                    {icon: <MailOutline className="sidebar-icon"/>, title: 'Mail'},
                    {icon: <DynamicFeed className="sidebar-icon"/>, title: 'Feedback'},
                    {icon: <ChatBubbleOutline className="sidebar-icon"/>, title: 'Messages'},
                ]}/>
                <SidebarMenu title="Staff" buttons={[
                    {icon: <WorkOutline className="sidebar-icon"/>, title: 'Manage'},
                    {icon: <Timeline className="sidebar-icon"/>, title: 'Analytics'},
                    {icon: <Report className="sidebar-icon"/>, title: 'Reports'},
                ]}/>
                     {/* <SidebarButton icon={<LineStyle />} title="Home" /> */}
            </div>
        </div>
    )
}

export default Sidebar
