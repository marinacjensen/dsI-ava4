const { sequelize } = require ("../config/database");

module.exports = (sequelize,DataTypes) => {

    var Empresa = sequelize.define ('empresa',{
        id:{
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING
        },
        salario: {
            type: DataTypes.DOUBLE
        },
        departamento: {
            type: DataTypes.BIGINT
        }
    
    
    },
    { timestamps: false }
    
    
    )
    
    return Empresa
    
    }