const db = require("../model");
const Admin = db.admin;
const config = require("../config/auth_config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signUp = async (req, res, next) => {
  try {
    const createAdmin = await Admin.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 12),
    });
    if (createAdmin) {
      res.status(200).json({ message: createAdmin });
    }
  } catch (error) {
    console.log({ message: error });
    res.status(404).json({
      message: "Cannot Signup ,Something Went wrong",
    });
  }
};

exports.findAllAdmin = async (req, res, next) => {
  try {
    const body = req.body.username;
    console.log(body);
    const getAdmin = await Admin.findAll({ body });
    res.send(getAdmin);
  } catch (error) {
    console.log(error);
    res.json({ message: "Cannot Get Admins" });
  }
};

exports.signIn = async (req, res, next) => {
  try {
    console.log({ body: req.body });
    const checkName = await Admin.findOne({
      where: {
        username: req.body.username,
      },
    });
  
    if (!checkName) {
      return res.status(404).json({
        message: "Please, Login Ist",
      });
    }
    var checkPassword = bcrypt.compareSync(
      req.body.password,
      checkName.dataValues.password
    );
    if (!checkPassword) {
      res.status(404).json({
        auth: false,
        accessToken: null,
        message: " InCorrect Password",
      });
    }
 
    
    var token = jwt.sign({ id: checkName.dataValues.id }, config.secret, {
      expiresIn: 86500,
    });
    res.status(200).json({
      id: checkName.dataValues.id,
      username: checkName.dataValues.username,
      email: checkName.dataValues.email,
      accessToken: token,
      auth: true,
    });
  } catch (error) {
    res.json({
       message: "Something went wrong , can't sign-in with this username and password",
        
    })
  }
};

