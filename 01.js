const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const bodyParser=require("body-parser");
const session = require("express-session");

var pool=mysql.createPool({
    host:'127.0.0.1',
    user:"root",
    password:'',
    database:"ele"
});

var server=express()
server.listen(3000)

// 配置允许访问列 脚手架8080
server.use(cors({
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"],
    credentials:true
  }));

  server.use(session({
    secret:"128位随机字符串",
    resave:false,
    saveUninitialized:true,
    cookie:{
      maxAge:1000*60*60
    }
  }))
  
server.use(express.static("public"));

//配置json是否是自动转换
server.use(bodyParser.urlencoded({extended:false}))
