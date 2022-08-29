const db = require("../model");
const Admin = db.admin;
const config = require("../config/auth_config");
const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const { DB } = require("../config/database_config");

exports.signUp = async (req, res, next) => {
  try {
    const createAdmin = await Admin.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 12),
    });
    if(createAdmin){
        // res.send("Account Created Successfully")
        res.send(createAdmin)
        
    }
    // res.send(createAdmin,{message:'admin  registrerd succesfully'})
  } catch (error) {
    console.log({ message: error });
    res.status(404).send({
      message: "Oops!!.. Something Went wrong",
    });
  }
};

exports.findAllAdmin = async  ( req,res,next)=>{
    try {
        const body = req.body.username;
        console.log(body)
        const getAdmin = await Admin.findAll({body})
        // res.send(getAdmin,{message:"Sign-In successfully "})
        res.send(getAdmin)
        // console.log(getAdmin)
    } catch (error) {
        console.log(error)
        res.send({message:"cannot get admins"})
    }
}

exports.signIn = async (req,res,next) =>{
    try {
        // const id = req.body.params;
        // const username = req.body.username,
        // const password = req.body.password
        console.log({body: req.body})
        // let isPresent = false;
        // let isPresentIndex = null;
        //  for (let i = 0; i < DB.length; i++) {
          
        //     if(DB[i].username === username && DB[i].password === password ){
        //       isPresent= true;
        //       isPresentIndex= i
        //     }
        //  }
         const checkName = await Admin.findOne({
            where:{
                username : req.body.username
            }
         })

         console.log({checkName})
         if(!checkName){
            return res.status(404).send({
                message: "userName does not matched"
            })

        }
        var checkPassword = bcrypt.compareSync(
            req.body.password,
            checkName.dataValues.password
        )
        if(!checkPassword){
            res.status(404).send({
              auth:false,
                accessToken:null,
                message: "password does not matched"
            })
        }

        var token = jwt.sign({id : checkName.dataValues.id},config.secret,{
            expiresIn: 86500
        });
          res.status(200).send({
            id : checkName.dataValues.id,
            username : checkName.dataValues.username,
            email : checkName.dataValues.email,
            accessToken: token,
            auth:true
          })

    } catch (error) {
        console.log({error})
        console.log({message:"Something went wrong , can't sigin with this username and password"})
    }
}
