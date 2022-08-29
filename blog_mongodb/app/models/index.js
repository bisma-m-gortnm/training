const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("./user_model");
db.blog = require("./blog_model");
// db.ROLES = ["user", "admin"];
module.exports = db;