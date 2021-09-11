import { Visibility } from '@material-ui/icons'
import React from 'react'

function WidgetSmItem({ img, username, position }) {
    return (
        <li className="widget-list-item">
            <img src={img} alt="user-img" className="widget-sm-user" />
            <div className="widget-sm-user-info">
                <span className="widget-sm-user-username">{username}</span>
                <span className="widget-sm-user-position">{position}</span>
            </div>
            <button className="widget-sm-button">
                <Visibility  className="widget-sm-icon"/>
                Display
            </button>
        </li>
    )
}

export default WidgetSmItem
