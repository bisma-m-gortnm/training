const express = require("express");
const cors = require("cors");
const app = express();
const db = require('../app/models')
const dbConfig = require('./config/db.config')
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
db.mongoose

  .connect(`mongodb+srv://bismah_admin:3MFlMg9pqO0aBoIW@cluster0.hy0xqmp.mongodb.net/blog_DB_Mongo`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bisma application." });
});
require('./routes/router')(app)
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});