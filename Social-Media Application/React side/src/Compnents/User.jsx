import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../actions/userAction'

const User = ({person}) => {
    const dispatch =useDispatch()
    const {user} = useSelector((state)=>state.Authreducer.authData);
const [following,setFollowing]= useState(person.followers.includes(user._id))
 const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
 const handleFollow = ()=>
 { following?
dispatch(unfollowUser(person._id, user)):
dispatch(followUser(person._id, user))
setFollowing((prev)=>!prev)
 }
  return (
    <div className="follower">
    <div>
        <img src={person.coverPicture? serverPublic+person.profilePicture : serverPublic+"defaultProfile.jprg"} alt="noimges" className='followerImage' />
        <div className='name'>
            <span>{person.firstname}</span>
            <span>{person.username}</span>
            </div>
    </div>
    <button className={following?"button1 UnfollowButton":"button1"} onClick={handleFollow}>
        {following?"Unfollow" : "Follow"}
    </button>
</div>
  )
}

export default User