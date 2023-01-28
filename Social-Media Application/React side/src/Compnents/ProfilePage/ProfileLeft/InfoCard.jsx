import React from 'react'
import { useState } from 'react'
import './InfoCard.css'
import ProfileModel from '../ProfileModel/ProfileModel'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import * as UserApi from '../../../API/UserRequest.js'
import { logOut } from '../../../actions/AuthAction'

const InfoCard = () => {
    const [modelOpened, setModelOpened] = useState(false)
    const dispatch = useDispatch()
    const params = useParams();
    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})

    const {user} = useSelector((state)=>state.Authreducer.authData)

    useEffect(()=>{
        const fetchProfileUser = async()=>{
            if(profileUserId ===user._id)
        {
            setProfileUser(user)
        }
    else{
        const profileUser = await UserApi.getUser(profileUserId)
        setProfileUser(profileUser)

    }}
    fetchProfileUser();
    },[user])
  
    const handleLogOut=()=>{
        dispatch(logOut())
    }
    return (
    <div className='InfoCard'>
        <div className="Infohead">
            <h4>Profile Info</h4>
            {user._id === profileUserId ?(<div className="Infohead">
            <img src="https://cdn-icons-png.flaticon.com/512/1827/1827933.png" alt="" 
            onClick={()=>setModelOpened(true)}/>
            <ProfileModel 
            modelOpened={modelOpened}
            setModelOpened={setModelOpened}
            data = {user}/>
        </div>):("")}
        </div>
        <div className="info">
<span>
    <b>Status : </b>
</span>
<span>{profileUser.relationship}</span>
        </div>
        <div className="info">
            <span><b>Lives In : </b></span>
            <span>{profileUser.livesin}</span>
        </div>
        <div className="info">
            <span><b> Works At : </b></span>
            <span>{profileUser.worksAt}</span>
        </div>
        <div className="info">
            <span><b> Country : </b></span>
            <span>{profileUser.country}</span>
        </div>
        <button className='button2' onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default InfoCard