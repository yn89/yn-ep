//创建路由
const express=require("express");
var router=express.Router();
const pool=require("../pool.js");

router.get("/",(req,res)=>{
  var sql="select * from ep_index_carousel";
  pool.query(sql,(err,result)=>{
    res.send(result);
  })
});
module.exports=router;