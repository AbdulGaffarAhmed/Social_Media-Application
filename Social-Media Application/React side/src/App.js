import React from 'react'
import Home from './Home.jsx'
import './App.css'
import Auth from './Pages/Auth';
import { Route,Routes,Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from './Compnents/ProfilePage/Profile.jsx'
const App = () => {
  const user = useSelector((state)=>state.Authreducer.authData)
  return (
    
    <div className='App'>
      <div className='blur' style={{top:'-18%',right:'0'}}></div>
      <div className='blur'style={{top:'36%',left:'-8rem'}}></div>
      <div className='blur'style={{top:'78%',left:'98rem'}}></div>
      <div className='blur'style={{top:'78%',left:'8rem'}}></div>
    <Routes>
      <Route path='/' element = {user?<Navigate to="home"/>:<Navigate to='auth'/>}/>{/* //user is available the navigate */}
      <Route path='/home' element = {user?<Home/>:<Navigate to="../auth"/>}/>
      <Route path='/auth' element = {user?<Navigate to="../home"/>:<Auth/>}/>    
      <Route path = '/profile/:id' element={user?<Profile/>:<Navigate to="../auth"/>}/>
    </Routes>
    </div>
   
  )
}

export default App