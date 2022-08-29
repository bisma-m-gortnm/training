const jwt = require('jsonwebtoken')
const config = require('../config/user_config')
const db = require('../models')
const User = db.user;
const Blog = db.blog;


verifyToken = async ( req,res,next)=>{
    try { 
     const header = req.headers["authorization"];
     const bearerToken = header.split(" ");
     console.log("header ",header)
     console.log(bearerToken);
     let token = bearerToken[1];
     console.log("token", token);
     if(!token){
         return res.status(404).send({
             message: "No Token Provided"
         })
     }
     jwt.verify(token,config.secret, (err, decoded)  =>{
         if(err){
             res.status(401).send({
                 message:err
             })
         }
         // console.log("decoded",decoded.id)
         req.adminId = decoded.id;
         next();
    })
    } catch (error) {
         console.log({message:error});
    }
 };

 const authJwt = {
    verifyToken
 }

 module.exports = authJwt;