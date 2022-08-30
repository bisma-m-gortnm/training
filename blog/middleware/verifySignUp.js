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
            res.status(400).json({
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
            res.status(400).json({
                message:`Failed. Admin of this email is already exists` 
            })
            return;
        }
        next();

    } catch (error) {
        console.log({message:error})
    }
}

 const verifySignUp ={
    checkDuplicateEntity: checkDuplicateEntity
 }
module.exports = verifySignUp;