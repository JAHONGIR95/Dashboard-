import React from 'react'
import './featuredInfo.scss'


function FeaturedItem({fTitle, fMoney, fRate, fIcon, fSub}) {
    return (
        <div className="featured-item">
            <span className="featured-title">{fTitle}</span>
            <div className="featured-money-container">
                <span className="featured-money">{fMoney}</span>
                <span className="featured-money-rate">{fRate}{fIcon}</span>
            </div>
            <span className="featured-sub">{fSub}</span>
        </div>
    )
}

export default FeaturedItem
