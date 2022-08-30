const authConfig = require('../config/auth_config')
const jwt = require("jsonwebtoken")

verifyToken = async ( req,res,next)=>{
   try { 
    const header = req.headers["authorization"];
    if(!header){
        res.send("Token Is Required")
    }
    const bearerToken = header.split(" ");
    console.log(bearerToken);
    let token = bearerToken[1];
    console.log("token", token);
    if(!token){
        return res.status(404).json({
            message: "No Token Provided"
        })
    }
     jwt.verify(token,authConfig.secret, (err, decoded)  =>{
        if(err){
            res.status(401).json({
                message:"Unauthorized Token"
            })
        }
        console.log(decoded.id)
        if(!decoded.id){
            res.json("Unauthenticated Token")
        }
        req.adminId = decoded.id;
        next();
   })
   } catch (error) {
        console.log({message:error});
   }
};

const authJwt = {
    verifyToken: verifyToken
}
module.exports = authJwt;