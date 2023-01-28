import React from 'react'
import Profilecard from '../ProfileCard/Profilecard'
import './Profile.css'
import ProfileLeft from './ProfileLeft/ProfileLeft'
import RIghtSide from '../RightSide/RIghtSide'
import PostSide from '../PostSide/PostSide'
const Profile = () => {
  return (
    <div className='Profile'>
        <ProfileLeft/>
        <div className="Profile-Center">
           <Profilecard location = "profilePage"/>
            <PostSide/>
        </div>
        <RIghtSide/>
    </div>
  )
}

export default Profile