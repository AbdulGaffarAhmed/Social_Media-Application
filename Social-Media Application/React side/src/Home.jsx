import React from 'react'
import PostSide from './Compnents/PostSide/PostSide'
import './Home.css'
import Profileside from './Compnents/ProfileSide/Profileside'
import RIghtSide from './Compnents/RightSide/RIghtSide'
const Home = () => {
  return (
    <div className='Home'>
        <Profileside/>
       <PostSide/>
      <RIghtSide/>
        
    </div>
  )
}

export default Home