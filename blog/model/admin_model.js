module.exports =(sequelize,Sequelize)=>{
    const Admin =sequelize.define("admin",{
        // id:{
        //     type:Sequelize.INTEGER,
        //     primaryKey: true,
        //     autoIncrement:true
        // },
        username:{
            type : Sequelize.STRING
        },
        email:{
            type :Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        }
    })
    return Admin;
}