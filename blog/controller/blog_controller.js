const db = require("../model");
const Admin = db.admin;
const Blog = db.blog;
const jwt = require("jsonwebtoken");
const config = require("../config/auth_config");
const { verifyToken } = require("../middleware/authJwt");

(exports.createBlog = async (req, res, next) => {
  try { 
      console.log("admin id in blog controller",req.adminId);

    // if( !req.AdminId){
    //     res.json({message:" please sign in first"})
    // }
     const id = req.adminId
     console.log("admin_id",id)
    const admin = await Admin.findAll(req.AdminId);
    console.log("pura admin", admin);
    const blogCreate = await Blog.create({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      comment: req.body.comment,
      userId : id
    });
    // await blogCreate.create(admin, { through: { id: false } });
    console.log("blog_creation ", blogCreate);
    // const result = await Blog.findOne({
    //   where: { title: req.body.title },
    //   include: Admin,
    // });
    // console.log("result is here ", result);
    if (blogCreate) {
      //  console.log(token);
      res.status(200).send({
        id: blogCreate.id,
        title: blogCreate.title,
        comment: blogCreate.comment,
      });
    }
  } catch (error) {
    console.log({ message: error });
  }
}),
  // exports.findBlog = async (req,res,next)=>{
  //     try {
  //     //    if(verifyToken){
  //          const  body = req.body
  //         // console.log(body);
  //         const blogFind = await Blog.findAll({body})
  //         res.status(401).send(blogFind)
  //         // console.log(blogFind);
  //     //    }
  //     } catch (error) {
  //          console.log({
  //             message: error
  //          })
  //     }
  // }

  (exports.findBlog = async (req, res, next) => {
    try {
      const blog = await Blog.findOne({
        attributes: ["title", "description", "image", "comments"],
        include: [
          {
            model: Blog,
            attributes: ["id", "title"],
            through: {
              attributes: ["adminId", "blogId"],
            },
          },
        ],
      });
      const result = res.send(blog);
      res.status(200).json({
        blog: blog,
      });
    } catch (error) {
      console.log(error);
    }
  });

exports.editBlog = async (req, res, next) => {
  try {
    const id = req.body.params;
    const blogEdit = await Blog.update({
      where: { id: id },
    });
    if (blogEdit == 1) {
      res.status(200).send({
        message: "Blog edit successfully",
      });
    } else {
      res.status(404).send({
        message: "Sorry Blog Updation Failed",
      });
    }
  } catch (error) {
    console.log({ message: error });
  }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    const id = req.body.params;
    const blogDelete = await Blog.delete({
      where: { id: id },
    });
    if (blogDelete == 1) {
      res.status(200).send({
        message: "Blog deleted successfully",
      });
    } else {
      res.status(404).send({
        message: "Sorry , Blog cannot be Deleted",
      });
    }
  } catch (error) {
    console.log({ message: error });
  }
};
