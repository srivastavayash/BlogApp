const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("ALL OK👍");
});

module.exports=router;