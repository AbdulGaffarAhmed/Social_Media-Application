import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ShareModel from '../ShareModel/ShareModel'
import './RightSide.css'
import TrendsCard from './TrendCard/TrendsCard'
const RIghtSide = () => {
  const [modelOpened, setModelOpened] = useState(false)

  return (
   <div className="Rightside">
    <div className="navIcons">
       <Link to = '../home'> <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" />
       </Link>
        <img src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/512/3602/3602123.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="" />
    </div>
<TrendsCard/>
<button className='buttonshare'onClick={()=>setModelOpened(true)}>
            <ShareModel 
            modelOpened={modelOpened}
            setModelOpened={setModelOpened}
            />
            Share</button>
   </div>
  )
}

export default RIghtSide