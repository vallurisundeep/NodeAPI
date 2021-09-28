const express=require('express');
const router=express.Router();

const Post=require('../models/Post');
// Get all the posts


router.get('/',async(req,res)=>{
    debugger
    try{
        const posts=await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }   
    
});


router.get('/single-post',(req,res)=>{
    res.send("Single Post");
        
});


//Submit the posts
router.post('/',async(req,res)=>{

   
      const post=new Post({
        empid:req.body.empid,
        fname:req.body.fname,
        lname:req.body.lname,
        gender:req.body.gender,
        email:req.body.email,
        age:req.body.age,
        doj:req.body.doj
         
     }
     
    
     );
    try{
        console.log(post.email)
         const savedPost=await post.save();
        res.json(savedPost);
       

    }catch(err){
        res.json({message:err})
    }
  
      
});

// //Get specific post

router.get('/:postId',async (req,res)=>{
    
    try{
        const post=await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err})
    }

});


//Delete a specific post

router.delete('/:postId',async (req,res)=>{

    try{
        const removedPost=await Post.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message:err})
    }

});

 //Update a post

router.patch('/:postId',async (req,res)=>{

    try{
        const updatedPost=await Post.updateOne(
            {_id:req.params.postId},
            {$set:{
                    empid:req.body.empid,
                    fname:req.body.fname,
                    lname:req.body.lname,
                    gender:req.body.gender,
                    email:req.body.email,
                    age:req.body.age,
                    doj:req.body.doj
                }
            }
           
            );

            res.json(updatedPost);
        res.json(removedPost);
    }catch(err){
        res.json({message:err})
    }

});
module.exports=router;