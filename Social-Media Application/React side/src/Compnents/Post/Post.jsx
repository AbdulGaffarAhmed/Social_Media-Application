import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { likePost } from '../../API/PostRequest'

import './Post.css'
const Post = ({data}) => {
  const {user} = useSelector((state)=>state.Authreducer.authData)
  const [liked, setLiked]= useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike = ()=>{
    setLiked((prev)=>!prev)
    likePost(data._id, user._id)
    liked?setLikes((prev)=>prev-1) : setLikes((prev)=>prev + 1)
  }
  return (
  <div className="post">
    <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image:"" } alt="no ppost" />
<div className="postReact">
    <img src={liked?"https://cdn-icons-png.flaticon.com/512/1077/1077086.png" : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"}
     alt="" style={{cursor:"pointer"}} onClick={handleLike}/>
    <img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="" />
    <img src="https://cdn-icons-png.flaticon.com/512/2958/2958791.png" alt="" />
</div>
<span style={{color :"grey", fontSize:"15px"}}>{likes} likes</span>
<div className="detail">
    <span><b>{data.name}</b></span>
    <span> {data.desc}</span>
</div>
  </div>
  )
}

export default Post