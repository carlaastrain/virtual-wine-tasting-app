"use strict";
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = sequelize.define('user', {
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
});
module.exports = User;
//# sourceMappingURL=user.model.js.map