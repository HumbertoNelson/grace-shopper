const Sequelize = require("sequelize");
require("dotenv").config();
const config = {};

if (process.env.QUIET) {
  config.logging = false;
}
if(process.env.DATABASE_URL){
config.dialectOptions = {
ssl: {
rejectUnauthorized: false
}
};
}

const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://roomie_app_user:ZrRnedBrGWpgEcQc2ftbaaIoxemKfkU2@dpg-ckhgk34ldqrs73ag27lg-a.ohio-postgres.render.com/roomie_app",
  config
);

module.exports = conn;
