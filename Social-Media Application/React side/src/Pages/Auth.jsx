import React from 'react';
import { useState } from 'react';
import './Auth.css';
import {useDispatch, useSelector} from 'react-redux';
import { logIn, signUp } from '../actions/AuthAction';


const Auth = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state)=>state.Authreducer.loading)
    
    const [isSignUp,setIsSignUp]= useState(true);
    console.log(loading)
    const [data, setData] = useState({firstname:"",lastname:"",username:"",password:"",confirmpassword:""});

    const [confirmPass, setConfirmPass] = useState(true);

    const handleChange = (e)=>{      //to check data that we are writing on inputs
        setData({...data, [e.target.name]:e.target.value})
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(isSignUp){
           data.password === data.confirmpassword? dispatch(signUp(data)): setConfirmPass(false);
        }else{
            dispatch(logIn(data));
        }
    };
    const resetForm=()=>{ // to reset the login form after sign up or clear both forms
        setConfirmPass(true);
        setData({firstname:"",lastname:"",username:"",password:"",confirmpassword:""});
    };
  return (
    <div className='Auth'>
        {/* //left side */}
        <div className="a-left">
        <img src='https://openclipart.org/image/2400px/svg_to_png/221725/Social-Media-Tree.png' alt='logo' className='logo'/>
        <div className="Webname">
            <h1>Social Media</h1>
            <h5>Connect with the people throughout the World</h5>
        </div>
        </div>
        {/* Right Side */}
        <div className="a-right">
            <form className='infoForm authForm' onSubmit={handleSubmit}>
                <h3>{isSignUp?" Sign Up":"Log In"}</h3>
                
                    {isSignUp&&
                    <div>
                      <input type="text" placeholder='First Name' className='infoInput' name='firstname'
                       onChange={handleChange} value={data.firstname}/>
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastname'
                    onChange={handleChange} value={data.lastname}/>
                </div>   }
                   
                <div>
                    <input type="text" className='infoInput' name='username' placeholder='Username'
                     onChange={handleChange} value={data.username}/>
                </div>
                <div>
                    <input type="password" className="infoInput" name='password' placeholder='Password' 
                    onChange={handleChange} value={data.password}/>
                 {isSignUp&& <input type="password" className="infoInput" name='confirmpassword' placeholder='Confirm Password'
                  onChange={handleChange} value={data.confirmpassword}/>}   
                </div>
                <span 
                style={{display:confirmPass?"none":"block",
                color:"red",
                fontSize:"12px",
                alignSelf:"flex-end",
                marginRight:"5px"}}>
                    * Password is not same</span>
                <div><span 
                style={{fontSize:'14px',
                cursor:'pointer'}} 
                onClick = {()=>{setIsSignUp((prev)=>!prev); resetForm()}}>{isSignUp?"Already have an account. Login!":"Don't have an account? Sign Up"}</span></div>
            <button className="button4" type='submit' disabled={loading}>
                {loading? "Loading..." : isSignUp?"SignUp":"LogIn"}</button>
            </form>
        </div> 
    </div>
  );
};

    

export default Auth