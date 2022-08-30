const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./model')

var corOption ={
  origin: "http://localhost:3000"   
}

app.use(cors(corOption));

app.use(bodyParser.json())

const db_model = require('./model')

db_model.sequelize.sync({force:true})
.then(()=>{
    console.log('Database of postgres connected successfully')
})

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res,next)=>{
    res.json({message:'welcome to my blog page'})
})

require('./routes/router')(app)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port no: \n http://localhost:${PORT} `);
})