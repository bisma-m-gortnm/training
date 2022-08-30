const { STRING } = require("sequelize");

module.exports =(sequelize, Sequelize)=>{
    const Blog = sequelize.define("blog",{
        id:{
            type:Sequelize.INTEGER,
            field: 'id',
            autoIncrement: true,
            allowNull: true,
            primaryKey: true
        },
        title:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING
        },
        comment:{
            type: Sequelize.STRING
        },
        userId:{
            type:Sequelize.STRING
        }
    })
    return Blog;
}