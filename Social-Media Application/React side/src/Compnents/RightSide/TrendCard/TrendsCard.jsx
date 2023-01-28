import React from 'react'
import './TrendsCard.css'
import { TrendsData } from './TrendData'
const TrendsCard = () => {
  return (

<div className="TrendCard">
  <h3>Trends for you</h3>
  {TrendsData.map((trend, id)=>{
    return(
      <div className='trend'>
        <span>#{trend.name}</span>
        <span>{trend.shares}k shares</span>
        </div>
    )
  })
  }
</div>

    )
}
export default TrendsCard