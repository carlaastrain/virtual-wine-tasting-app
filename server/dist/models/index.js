"use strict";
const sequelize = require('../config/sequelize');
const User = require('./user.model');
const Tasting = require('./tasting.model');
Tasting.belongsTo(User);
User.hasMany(Tasting);
module.exports = sequelize;
// Tasting.associate = model => {
//     Tasting.belongsTo(model.User);
//     return Tasting;
// };
//# sourceMappingURL=index.js.map