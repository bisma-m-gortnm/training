
const { ROLES } = require('../model')
const db= require('../model')
db.ROLES = db.ROLES
const Admin = db.admin

checkDuplicateEntity = async (req,res,next)=>{
    try {
        
        const checkUsername = await Admin.findOne({
            where:{
                username :req.body.username
            }
        })
        if(checkUsername){
            res.status(400).send({
                message: "Admin of this username is already exists"
            });
            return;
        }

        const checkEmail = await Admin.findOne({
            where:{
                email : req.body.email
            }
        })
        if(checkEmail){
            res.status(400).send({
                message:`Failed. Admin of this email is already exists` 
            })
            return;
        }
        next();

    } catch (error) {
        console.log({message:error})
    }
}

// checkRole = async (req,res,next) =>{
//     try {
//         if(req.body.roles){
//             for (let i = 0; i < req.body.roles.length; i++) {
//                if(!ROLES.includes(req.body.roles[i])){
//                 res.send({message: req.body.roles[i]})
//                }
//                 return;
//             }
//         }
//     } catch (error) {
//         console.log({message:error});
//     }
// }

 const verifySignUp ={
    checkDuplicateEntity: checkDuplicateEntity,
    // checkRole: checkRole
 }
module.exports = verifySignUp;