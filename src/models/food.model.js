'use strict';

const food = (sequelize, DataTypes) => {
   let defineFood= sequelize.define('food', {
       
  foodName: {
    type: DataTypes.STRING,
    allowNull: false}
})
return defineFood;
}

module.exports = food;