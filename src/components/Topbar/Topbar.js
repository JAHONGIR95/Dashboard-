import React from 'react'
import './Topbar.scss'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="topbar-left">
                    <span className="logo">superadmin</span>
                </div>
                <div className="topbar-right">
                    <div className="topbar-icons-container">
                        <NotificationsNone />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="topbar-icons-container">
                        <Language />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="topbar-icons-container">
                        <Settings />
                    </div>
                    <img src="https://cdn-media.theathletic.com/cdn-cgi/image/fit=cover,width=700,height=466/QpPJS3u8eVPA_QpPJS3u8eVPA_kk64ZC65yUDx_original_1440x960.jpg" alt="" className="top-avatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
