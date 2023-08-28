const { sequelize, Sequelize } = require ('../config/database');

const empregados = require('../models/empregados')(sequelize,Sequelize)

exports.index = 
    async (req, res) => {
        const results = await empregados.findAll({
            order: [['id', 'ASC']]
        });
        res.render('index', { results });
    };

exports.form = (req, res) => {
    res.render('form');
}

exports.add = async (req, res) => {
    const { nome, sal_bruto, departamento } = req.body;
    await empregados.create({ nome, sal_bruto, departamento });
    res.redirect('/');
};

exports.deleta = async (req, res) => {
    const id = req.params.id;
    await empregados.destroy({ where: { id } });
    res.redirect('/');
};

exports.edita = async (req, res) => {
    const id = req.params.id;
    const empregado = await empregados.findByPk(id);
    res.render('formedit', { id, empregado });
};

exports.atualiza = async (req, res) => {
    const id = req.params.id;
    const { nome, sal_bruto, departamento } = req.body;
    await empregados.update({ nome, sal_bruto, departamento }, { where: { id } });
    res.redirect('/');
};