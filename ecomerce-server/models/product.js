'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    rate: DataTypes.FLOAT,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    detail: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};