const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

//查询分类（树形结构）
/*router.get("/productType", (req, res) => {
    var sql = "select * from ep_product_family ";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});*/

//查询数据
/*router.get("/productList",(req,res)=>{
    var family_id=req.query.family_id;
    var sql="select * from ep_product where family_id=?";
    pool.query(sql,[family_id],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })
})*/
router.get("/productList",(req,res)=>{
    //查询所有分类
    var sql = "select * from ep_product_family";
    var progress = 0; //sql执行进度
    obj = { code: 1 };
    pool.query(sql,(err, result) => {
        console.log(result);
        if (err) throw err;
        obj.type=result;
        progress += 50;
        if (progress == 100) {
            res.send(obj);
        }
    });
    //查询family_id=1下所有的产品
    var sql="select * from ep_product where family_id=?";
    var family_id=req.query.family_id;
    pool.query(sql,[family_id],(err,result)=>{
        if(err) throw err;
        obj.product=result;
        progress+=50;
        if (progress == 100) {
            res.send(obj);
            console.log(obj);
        }
    })
})

module.exports = router;