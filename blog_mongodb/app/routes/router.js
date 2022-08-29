 const {verifySignUp} = require("../middleware")
 const { authJwt } = require("../middleware");
 const user_controller = require("../controllers/user_controller")
 const blog_controller = require("../controllers/blog_controller")

 module.exports=function(app){
    app.use(function(req,res,next){
        res.header(  "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        );
    next();
    })

    app.post('/signup', [verifySignUp.checkDuplicateUser], user_controller.signUp)

    app.post("/signin", user_controller.signIn)

//     app.get("/api/test/all", blog_controller.allAccess);
//   app.get("/api/test/user", [authJwt.verifyToken], blog_controller.userBoard);
//   app.get(
//     "/api/test/mod",
//     [authJwt.verifyToken, authJwt.isModerator],
//     blog_controller.moderatorBoard
//   );
//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     blog_controller.adminBoard
//   );
 }


