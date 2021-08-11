'use strict';

const clothes = (sequelize, DataTypes) => {
   let defineClothes= sequelize.define('clothes', {
       
  clothingName: {
    type: DataTypes.STRING,
    allowNull: false
}});
return defineClothes;
}

module.exports = clothes;