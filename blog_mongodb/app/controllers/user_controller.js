const config = require("../config/user_config")
const db = require("../models")
const User = db.user;
const Blog = db.blog;
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


exports.signUp =  async (req,res,next)=>{
    const user =  new User({
        username: req.body.username,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password, 12)
    });
   user.save((err,user)=>{
        if(err){
            res.status(500).send({message:err})
            return;
        }
        res.send("userlogin")
        // if(req.body.blogs){
        //     Blog.find(
        //         {
        //             title: { $in : req.body.blogs}
        //         },
        //         (err,blogs) =>{
        //             if (err) {
        //                 res.status(500).send({ message: err });
        //                 return;
        //               }
        //         user.blogs = blogs.map(blog => blog._id)
        //         user.save(err =>{
        //             if (err) {
        //                 res.status(500).send({ message: err });
        //                 return;
        //               }
        //               res.send({ message:"user regiter succes"})
        //         })
        //         }
        //     )
        // }else{
        //     Blog.findOne({title: "user"} , (err,blog)=>{
        //         if (err) {
        //             res.status(500).send({ message: err });
        //             return;
        //           }
        //           user.blogs = [blog._id]
        //           user.save(err =>{
        //             if (err) {
        //                 res.status(500).send({ message: err });
        //                 return;
        //               }
        //               res.send({message:"user added successfully"})
        //           })
        //     })
        // }

    })

}

exports.signIn = async (req,res,next) =>{
    try {
       User.findOne({ username : req.body.username})
        // .populate("blogs", "-__v")
        .exec((err,user)=>{
            if (err) {
                res.status(500).send({ message: err });
                return;
              }
              if (!login) {
                return res.status(404).send({ message: "User Not found." });
              }

              var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
              );
              if (!passwordIsValid) {
                return res.status(401).send({
                  accessToken: null,
                  message: "Invalid Password!"
                });
              }
              var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
              });
              // var authorities = [];
              // for (let i = 0; i < user.blogs.length; i++) {
              //   authorities.push("ROLE_" + user.blogs[i].title.toUpperCase());
              // }
              res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                blogs: authorities,
                accessToken: token
              });
        })
    } catch (error) {
        console.log({message:error});
    }
}

