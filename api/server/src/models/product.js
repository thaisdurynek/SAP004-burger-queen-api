'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2)
  }, {});
  Product.associate = function(models) {
      Product.hasMany(models.Products_order)
  };
  return Product;
};