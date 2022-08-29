const auth_controller = require('../controller/auth_controller')
const blog_controller = require('../controller/blog_controller')
const {verifySignUp} = require('../middleware')
const {authJwt} = require('../middleware')
module.exports = function (app){

 app.use(function(req,res,next){
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token , Origin , Content-Type, Accept"
    )
    next();
 })
    app.post('/signup', [verifySignUp.checkDuplicateEntity],auth_controller.signUp)

    app.get('/users', auth_controller.findAllAdmin)

    app.post('/signin', auth_controller.signIn)

    app.post('/postblog',[authJwt.verifyToken] ,blog_controller.createBlog)  
   //  app.get('/getblogs', blog_controller.findBlog)  
    app.put('/edit', [authJwt.verifyToken] , blog_controller.editBlog)

    app.delete('/remove',[authJwt.verifyToken] ,blog_controller.deleteBlog)
  
}