//用express创建服务器
const express=require("express");
const cors=require("cors");
const app=express();
app.listen(8000);

//托管静态文件到public下
app.use(express.static("public"));
//app.use(cors({
//  origin:["http://127.0.0.1:5500",
//  "http://localhost:5500"],
//  credentials:true
//}))

//引入路由模块
const index=require("./routes/index_router.js");
const productSeries=require("./routes/product_series.js");
//使用路由器来管理路由
app.use("/index",index);
app.use("/productSeries",productSeries);