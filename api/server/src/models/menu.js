'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2)
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};