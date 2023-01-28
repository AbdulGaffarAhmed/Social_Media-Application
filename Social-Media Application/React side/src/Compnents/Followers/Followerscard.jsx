import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../API/UserRequest'
import User from '../User'
import './Followerscard.css'


const Followerscard = () => {
    const [persons, setPersons] = useState([]);
    const {user} = useSelector((state)=>state.Authreducer.authData);
    useEffect (()=>{
        const fetchPersons = async()=>{
            const {data} = await getAllUser();
            setPersons(data)
            console.log(data)
        };
        fetchPersons();
    },[]);
  return (
   <div className="FollowersCard">
    <h3>People you may know</h3>

    {persons.map((person, id)=>{
        if(person._id !== user._id){
        return <User person = {person} key = {id}/>;
        }
    
    })}
   </div>
  )
}

export default Followerscard