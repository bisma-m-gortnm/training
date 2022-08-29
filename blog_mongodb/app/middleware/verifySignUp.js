const db = require("../models")
const User = db.user

checkDuplicateUser = async (req,res,next) =>{
try {
     User.findOne({ username :req.body.username})
    .exec((err,checkUser) =>{
      if(err){
         res.status(500).send({message:err})
         return;
      }
      if(checkUser){
         res.status(500).send({ message : "already username added"})
         return;
      }
    })
   

    const checkEmail = await User.findOne({ email :req.body.email})
    .exec((err,checkEmail) =>{
      if(err){
         res.status(500).send({message:err})
         return;
      }
      if(checkEmail){
         res.status(500).send({ message : "already email added"})
         return;
      }
    })

    next();
} 
catch (error) {
    console.log({message:error})
}
}

const verifySignUp = {
    checkDuplicateUser
}

module.exports = verifySignUp;