import React from 'react'
import '../../ProfileSide/Profileside.css'
import InfoCard from './InfoCard'
import Search from '../../Search/Search'
import FollowersCard from '../../Followers/Followerscard'
const ProfileLeft = () => {
  return (
    <div className='Profileside'>
        <Search/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft