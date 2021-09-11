import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './featuredInfo.scss'
import FeaturedItem from './FeaturedItem'

function FeaturedInfo() {
    return (
        <div className="featured">
            <FeaturedItem fTitle="Revanue" fMoney="$2,415" fRate="-11,4" fIcon={<ArrowDownward className="featured-icon negative" />} fSub="Compared to last month" />
            <FeaturedItem fTitle="Sales" fMoney="$4,415" fRate="-1,4" fIcon={<ArrowDownward className="featured-icon negative" />} fSub="Compared to last month" />
            <FeaturedItem fTitle="Cost" fMoney="$2,225" fRate="+3,4" fIcon={<ArrowUpward className="featured-icon" />} fSub="Compared to last month" />
        </div>
    )
}

export default FeaturedInfo
