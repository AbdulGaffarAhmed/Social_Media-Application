import * as AuthAPI from '../API/AuthRequest'

export const logIn = (FormData)=>async(dispatch) =>{
    dispatch({type:"AUTH__START"})//telling authentication has been started
    try{
        const {data} = await AuthAPI.logIn(FormData)
        dispatch({type:"AUTH_SUCCESS",data:data})//auth.. completed
    }catch(error){
        console.log(error)
        dispatch({type:"AUTH_FAIL"})
    }
}

export const signUp = (FormData)=>async(dispatch) =>{
    dispatch({type:"AUTH__START"})//telling authentication has been started
    try{
        const {data} = await AuthAPI.signUp(FormData)
        dispatch({type:"AUTH_SUCCESS",data:data})//auth.. completed
    }catch(error){
        console.log(error)
        dispatch({type:"AUTH_FAIL"})
    }
}
export const logOut = ()=> async(dispatch)=>{
    dispatch({type:"LOG_OUT"})
}