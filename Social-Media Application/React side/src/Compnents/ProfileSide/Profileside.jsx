import React from 'react'
import Profilecard from '../ProfileCard/Profilecard'
import Search from '../Search/Search'
import Followerscard from '../Followers/Followerscard'
import './Profileside.css'
const Profileside = () => {
  return (
    <div className='Profileside'>
      <Search/>
      <Profilecard location = "homePage"/>
      <Followerscard />
      </div>
  )
}

export default Profileside