const express = require("express"); 
const router = express.Router();    
const Comments = require("./../models/Comment.model");    



router.get('/:id', async (req, res) => {
     const {id} = req.body; 
     const user = await Comments.findById(id) 
     if(!user){
         return res.status(500).json("User not found you need register")
     }else{
         const comments = await Comment.find() 
         return res.status(200).json(comments) 
     }
}) 

