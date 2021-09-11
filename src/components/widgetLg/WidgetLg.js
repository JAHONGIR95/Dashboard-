import React from 'react'
import './widgetLg.scss'
import WidgetLgItem from './WidgetLgItem.js'
const img = 'https://w0.peakpx.com/wallpaper/313/555/HD-wallpaper-emily-rudd-2019-emily-rudd-model-girls-actress-celebrities.jpg'

function WidgetLg() {
    return (
        <div className="widget-lg">
            <h3 className="widget-lg-title">Latest transactions</h3>
            <table className="widget-lg-table">
                <tr className="widget-lg-tr">
                    <th className="widget-lg-th">Customer</th>
                    <th className="widget-lg-th">Date</th>
                    <th className="widget-lg-th">Amount</th>
                    <th className="widget-lg-th">Status</th>
                </tr>
                <WidgetLgItem img={img} name="Susan Carol" date="2 Jun 2021" amount="$122.00" status="Approved" />
                <WidgetLgItem img={img} name="Susan Carol" date="2 Jun 2021" amount="$122.00" status="Declines" />
                <WidgetLgItem img={img} name="Susan Carol" date="2 Jun 2021" amount="$122.00" status="Pending" />
                <WidgetLgItem img={img} name="Susan Carol" date="2 Jun 2021" amount="$122.00" status="Approved" />
            </table>
        </div>
    )
}

export default WidgetLg
