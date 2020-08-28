'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products_order = sequelize.define('Products_order', {
    qtd: DataTypes.INTEGER,
    obs: DataTypes.STRING,
    add_egg: DataTypes.BOOLEAN,
    add_cheese: DataTypes.BOOLEAN,
  }, {});
  Products_order.associate = function(models) {
    Products_order.belongsTo(models.Product,{
      foreignKey: 'productId'
    })
    Products_order.belongsTo(models.Order,{
      foreignKey: 'orderId'
    })
  };
  return Products_order;
};