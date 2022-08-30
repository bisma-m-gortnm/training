const db = require("../model");
const Admin = db.admin;
const Blog = db.blog;

(exports.createBlog = async (req, res, next) => {
  try { 

     const userId = req.adminId
   if( userId){   
    const blogCreate = await Blog.create({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      comment: req.body.comment,
      userId : userId
    });
    if (blogCreate) {
      res.status(200).send({
        id: blogCreate.id,
        title: blogCreate.title,
        comment: blogCreate.comment,
      });
        }    }
  } catch (error) {
    console.log({ message: error });
  }
}),
  exports.findBlog = async (req,res,next)=>{
      try {
           const  body = req.body
          const blogFind = await Blog.findAll({body})
          res.status(401).send(blogFind)
      } catch (error) {
           console.log({
              message: error
           })
      }
  }


exports.editBlog = async (req, res, next) => {
  try {
    const id = req.params.id
    const userId = req.adminId
    if(userId){
        const blogEdit = await Blog.update({
            title:req.body.title,description: req.body.description,comment:req.body.comment},{where: { id: id }});
          if (blogEdit == 1) {
            res.status(200).json({
              message: "Blog edit successfully",
            });
          } else {
            res.status(404).json({
              message: "Cannot Edit Blog, may be Blog not found",
            });
          }
    }

  } catch (error) {
    console.log({ message: error });
  }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log({id});
    const userId = req.adminId
    console.log({userId})
    if(userId){
        const blogDelete = await Blog.destroy({where: { id: id }});
        if (blogDelete == 1) {
          res.status(200).send({
            message: "Blog deleted successfully",
          });
        } else {
          res.status(404).send({
            message: "Sorry ,Blog cannot be Deleted, may be not found ",
          });
        }
    }
  } catch (error) {
    console.log("00000000000",{ message: error });
  }
};
