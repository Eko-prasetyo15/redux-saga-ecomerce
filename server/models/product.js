'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    title: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    detailproduct: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};