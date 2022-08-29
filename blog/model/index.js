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

// db.admin.belongsToMany(db.blog, { through: adminBlog });
// db.blog.belongsToMany(db.admin, { through: adminBlog });
// // through is required!

// user.addProject(project, { through: { role: 'manager' }});
// db.admin.belongsToMany(db.blog, {through: db.admin,as :'admin_blog',foreignKey: `adminId`,otherKey: 'blogId'})
// db.blog.belongsToMany(db.admin, { through: db.blog, as :'admin_blog',foreignKey:'blogId',otherKey:'adminId'})
// module.exports = (sequelize,Sequelize) =>{
//      const admin_blog = sequelize.define('admin_blog',{ id: Sequelize.BOOLEAN , primaryKey :true},{timestamps : false})
// db.admin.belongsToMany(db.blog,{ through :admin_blog})
// db.blog.belongsToMany(db.admin,{ through :admin_blog})
//  }
// db.ROLES = ["admin","blog"]

module.exports = db;
