const db = require('../model')
const Admin = db.admin
const authConfig = require('../config/auth_config')
const jwt = require("jsonwebtoken")
const { admin } = require('../model')

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
     jwt.verify(token,authConfig.secret, (err, decoded)  =>{
        if(err){
            res.status(401).send({
                message:"Unauthorized"
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

// verifyToken = async (req,res,next) =>{
//     const token = req.body.token;

//     if(token){
//         const decode = jwt.verify(token, authConfig.secret);

//         res.json({
//             login : true,
//             data : decode,
//         });
//     }
//     else{
//         res.json({
//             login : false,
//             data : "error"
//         })
//     }
// }

isUser = async (req,res,next) =>{
    try {
        const userValid= await Admin.findByPk(req.adminId)
        const checkRole = admin.getAdmin()
         for (let i = 0; i < checkRole.length; i++) {
            if( checkRole[i].name === "admin")
            next()
            return;
         }
        //  res.status(403).send({
        //     message: " Require Admin"
        //  })
        res.send(userValid)
    } catch (error) {
        console.log({ message: error});
    }
}

const authJwt = {
    verifyToken: verifyToken,
    isUser : isUser
}
module.exports = authJwt;