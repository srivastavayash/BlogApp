const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    const locals={
        title:"BlogApp",
        decription:"Blogging application based NODEJS,EXPRESSJS and MONGODB"
    }
    res.render('index',{locals});
});

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('/contact',(req,res)=>{
    res.render('contact');
});

module.exports=router;