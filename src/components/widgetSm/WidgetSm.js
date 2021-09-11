import React from 'react'
import './widgetSm.scss'
import WidgetSmItem from './WidgetSmItem'
const userImg = 'https://cdn2.stylecraze.com/wp-content/uploads/2013/02/2.-Lily-May-Mac-1.jpg'

function WidgetSm() {
    return (
        <div className="widget-sm">
            <span className="widget-sm-title">New Join Members</span>
            <ul className="widget-sm-list">
                <WidgetSmItem img={userImg} username="Anna Deo" position="Software Engineer" />
                <WidgetSmItem img={userImg} username="Maria Deo" position="Software Engineer" />
                <WidgetSmItem img={userImg} username="Laura Deo" position="Software Engineer" />
                <WidgetSmItem img={userImg} username="Shakira Deo" position="Software Engineer" />
                <WidgetSmItem img={userImg} username="Shakira Deo" position="Software Engineer" />
            </ul>
        </div>
    )
}

export default WidgetSm
