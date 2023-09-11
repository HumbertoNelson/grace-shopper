const Sequelize = require('sequelize');
const config = {
};

if(process.env.QUIET){
  config.logging = false;
}
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dpg-cjt720dhtt0c7397dtpg-a', config);

module.exports = conn;
