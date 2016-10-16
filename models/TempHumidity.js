"use strict";
module.exports = function(sequelize, DataTypes) {
 var TempHumidity = sequelize.define("TempHumidity", {
 
 ID : {
 type : DataTypes.BIGINT.UNSIGNED,
 allowNull : false,
 },
 
 DateTime : {
 type : DataTypes.DATE,
 allowNull : false,
 },
	 
 TemperatureC : {
 type : DataTypes.FLOAT,
 allowNull : false,
 },
 
 HumidityP : {
 type : DataTypes.INTEGER.UNSIGNED,
 allowNull : false,
 }
 });
 
 return TempHumidity;
};