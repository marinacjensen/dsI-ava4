const { calculaSalLiq } = require("../salLiquido");

module.exports = (sequelize,DataTypes) => {

    var empregados = sequelize.define ('empregados',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING
        },
        sal_bruto: {
            type: DataTypes.DECIMAL(10,2)
        },
        sal_liq:
        {
            type: DataTypes.VIRTUAL,
            get() {
                return calculaSalLiq(this.sal_bruto);
            }
        },
        departamento: {
            type: DataTypes.INTEGER
        }
    
    
    },
    { timestamps: false }
    
    
    )
    
    return empregados
    
    }