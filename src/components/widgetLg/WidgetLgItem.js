import React from 'react'
import './widgetLg.scss'

function WidgetLgItem({img, name, date, amount, status}) {

    const Button = ({ type }) => {
        return <button className={"widget-lg-button " + type}>{type}</button>
    }
    
    return (
        <tr className="widget-lg-tr">
            <td className="widget-lg-user">
                <img src={img} alt="" className="widget-lg-user-img" />
                <span className="widget-lg-name">{name}</span>
            </td>
            <td className="widget-lg-date">{date}</td>
            <td className="widget-lg-amount">{amount}</td>
            <td className="widget-lg-status">{<Button type={status} />}</td>
        </tr>
    )
}

export default WidgetLgItem
