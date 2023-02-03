const conn = require("./conn");
const { TEXT } = conn.Sequelize;

const Review = conn.define("review", {
  review: {
    type: TEXT,
    allowNull: false,
  },
});

module.exports = Review;
