const env = 'job';

if (env === 'home') {
  module.exports = {
    dialect: 'postgres',
    host: 'host',
    username: 'username',
    password: 'pass',
    database: 'database',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
       /** por padrao, o sequelize cria as tabelas com alguns padroes,
        um deles é colocar "s" no final do nome da tabela, usando 
       freezaTableName = true, tiramos essas regras.
       **/
      freezeTableName: true,
    },
  };
} else {
  module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'admin',
    password: 'pass',
    database: 'database',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      /** por padrao, o sequelize cria as tabelas com alguns padroes,
        um deles é colocar "s" no final do nome da tabela, usando 
       freezaTableName = true, tiramos essas regras.
       **/
      freezeTableName: true,
    },
  };
}
