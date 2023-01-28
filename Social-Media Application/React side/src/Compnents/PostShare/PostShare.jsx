import React, {useState, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/uploadAction';


import './PostShare.css'
const PostShare = () => {
    const loading = useSelector((state)=>state.postReducer.uploading)
    const [image, setImage] = useState(null)
    const imageRef = useRef();
    const dispatch = useDispatch();
    const desc = useRef();
    const {user} = useSelector((state)=>state.Authreducer.authData)

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const onImageChange = (event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage(img);
        }
    };
    const reset =()=>{
        setImage(null);
        desc.current.value=""
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newPost ={
            userId: user._id,
            desc: desc.current.value
        }
        if(image){  //if the image there at user then store with file name and date 
            const data = new FormData()
            const filename= Date.now() + image.name;
            data.append("name",filename)
            data.append("file",image)
            newPost.image = filename;
            console.log(newPost);
            try{
                dispatch(uploadImage(data))
            }catch(error){
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    }
  return (
     <div className="PostShare">
    <img src={user.profilePicture? serverPublic + user.profilePicture : serverPublic+"defaultProfile.jpeg"} alt="Profile"/>
    <div>
    <input 
    ref={desc}required type="text" placeholder="Description"/>
    <div className="PostOptions">
    <div className="option" onClick={()=>imageRef.current.click()}>
        <img src='https://cdn-icons-png.flaticon.com/128/711/711191.png' alt='icon'/>

         Photo
    </div>
    <div className="option" onClick={()=>imageRef.current.click()}>
        <img src='https://cdn-icons-png.flaticon.com/512/686/686458.png' alt='icon'/>
     Video
    </div>
    <div className="option">
        <img src='https://cdn-icons-png.flaticon.com/512/535/535188.png' alt='icon'/>
     Location
    </div>
    <div className="option">
        <img src='https://cdn-icons-png.flaticon.com/128/2669/2669444.png' alt='icon'/>
     Shedule
    </div>
    <button className='button3' onClick={handleSubmit} disabled={loading}>
        {loading? "Uploading...":"Share"}
    </button>
    <div style={{ display: "none"}}>
    <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
    </div>
  </div>
  {image && (
    <div className='previewImage'>
        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png" alt="cutt" className='cut' onClick={()=>setImage(null)} />
        <img src={URL.createObjectURL(image)} alt="cross" className='cross' />
    </div>
  )}
  </div>
  </div>
  );
};

export default PostShare