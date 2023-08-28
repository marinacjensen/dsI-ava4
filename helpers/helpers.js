const helpers = {
    descDepartamento: function (value) {
        const departamentos = [
            'Administrativo',
            'Design',
            'Contabilidade',
            'Fábrica'
        ];
        return departamentos.at(parseInt(this.departamento) - 1);
    },

}

module.exports = helpers;