import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

// create new post
export const createPost = async(req,res)=>
{
    const newPost = new PostModel(req.body);
    try{
await newPost.save();
res.status(200).json(newPost)
    }catch(error){
res.status(500).json(error)
    }
}

//gGEt Post

export const getPost = async(req,res)=>{
    const id = req.params.id;
    try{
const post = await PostModel.findById(id)
res.status(200).json(post)
    }catch(error){
        res.status(500).json(error)
    }
}

//upf=date a postt
export const updatePost = async (req,res)=>{
    const postId = req.params.id;
    const {userId} =req.body;
    try{
        const posts = await PostModel.findById(postId)
        if(posts.userId === userId){
            await posts.updateOne( { $set :req.body })
            res.status(200).json("Post Updated")
        }else{
            res.status(403).json("Action forbidden")
        }
    }catch(error){
        res.status(500).json(error)
    }
}

/// delete postt
export const deletePost = async (req,res)=>
{
    const id=req.params.id;
    const {userId} = req.body
    try{
const posts = await PostModel.findById(id)
if(posts.userId ===userId){
await posts.deleteOne();
res.status(200).json("Post Deleted")
}else{
            res.status(403).json("Action forbidden")
        }
    }catch(error){
        res.status(500).json(error)
    }
}

// like d snd dislike

export const likePost = async (req,res)=>
{
    const id=req.params.id;
    const {userId} = req.body
    try{
const posts = await PostModel.findById(id)
if(!posts.likes.includes(userId)){
await posts.updateOne({$push : {likes:userId} });
res.status(200).json("Post liked")
}else{
    await posts.updateOne({$pull : {likes:userId} });
    res.status(200).json("Post Unliked")
        }
    }catch(error){
        res.status(500).json(error)
    }
}


//gett on timeline
export const getTimelinePost = async (req,res)=>
{
    const userId=req.params.id;
    try{
const currentUserPosts = await PostModel.find({userId:userId})
    const followingPosts = await UserModel.aggregate([
        {
            $match:{
                _id: new mongoose.Types.ObjectId(userId)
            }
        },
        {
            $lookup:{
                from:"posts",
                localField:"following",
                foreignField:"userId",
                as:"followingPosts"
            }
        },
        {
            $project:{
                followingPosts:1,
                _id:0
            }
        }
    ])
    res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts)
    .sort((a,b)=>{
        return b.createdAt - a.createdAt;
    })
    );
}catch(error){
        res.status(500).json(error)
    }
}