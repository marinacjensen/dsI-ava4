const { sequelize, Sequelize } = require ('../config/database')

const empresaModel = require('../models/empresa')(sequelize,Sequelize)

exports.exibirTela = (req, res) => {
    res.render('index');
}