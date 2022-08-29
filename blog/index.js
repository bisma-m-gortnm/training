const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./model')
// const Blog = db.blog
var corOption ={
  origin: "http://localhost:3000"   
}

app.use(cors(corOption));

app.use(bodyParser.json())

const db_model = require('./model')

db_model.sequelize.sync({force:true})
.then(()=>{
    console.log('postgres connected successfully');
    // initial();
})

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res,next)=>{
    res.json({message:'welcome to my blog page'})
})

require('./routes/router')(app)
// require('./routes/blog_route')(app)
// require('./routes/user_route')(app)

// function initial(){
//     Blog.create({
//         id:1,
//         name:"admin"
//     })
//     Blog.create({
//         id:2,
//         name:"blog"
//     })
// }
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port no: \n http://localhost:${PORT} `);
})