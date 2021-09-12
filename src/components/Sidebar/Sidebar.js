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
                    {icon: <LineStyle className="sidebar-icon"/>, to: "/", title: 'Home',},
                    {icon: <Timeline className="sidebar-icon"/>, to: "/analytics", title: 'Analytics'},
                    {icon: <TrendingUp className="sidebar-icon"/>, to: "/sales", title: 'Sales'},
                ]}/>
                <SidebarMenu title="Quick Menu" buttons={[
                    {icon: <PermIdentity className="sidebar-icon"/>, to: "/users", title: 'Users'},
                    {icon: <Storefront className="sidebar-icon"/>, to: "/products", title: 'Products'},
                    {icon: <AttachMoney className="sidebar-icon"/>, to: "/transactions", title: 'Transactions'},
                    {icon: <BarChart className="sidebar-icon"/>, to: "/reports", title: 'Reports'},
                ]}/>
                <SidebarMenu title="Notifications" buttons={[
                    {icon: <MailOutline className="sidebar-icon"/>, to: "/mail", title: 'Mail'},
                    {icon: <DynamicFeed className="sidebar-icon"/>, to: "/feedback", title: 'Feedback'},
                    {icon: <ChatBubbleOutline className="sidebar-icon"/>, to: "/message", title: 'Messages'},
                ]}/>
                <SidebarMenu title="Staff" buttons={[
                    {icon: <WorkOutline className="sidebar-icon"/>, to: "/manage", title: 'Manage'},
                    {icon: <Timeline className="sidebar-icon"/>, to: "/analytic", title: 'Analytics'},
                    {icon: <Report className="sidebar-icon"/>, to: "/reports", title: 'Reports'},
                ]}/>
            </div>
        </div>
    )
}

export default Sidebar
