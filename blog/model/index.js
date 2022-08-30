const Config = require("../config/database_config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    Config.DB,
    Config.USER,
    Config.PASSWORD,
    {
        host:Config.HOST,
        dialect: Config.dialect,

        pool:{
            max: Config.pool.max,
            min: Config.pool.mon,
            ideal : Config.pool.ideal,
            acquire : Config.pool.acquire

        }
    }
)

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admin = require("./admin_model")(sequelize,Sequelize)
db.blog = require("./blog_model")(sequelize,Sequelize)

module.exports = db;
