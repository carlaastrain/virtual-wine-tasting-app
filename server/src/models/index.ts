import sequelize from '../config/sequelize';
import User from './user.model';
import Tasting from './tasting.model';

Tasting.belongsTo(User);
User.hasMany(Tasting);


export default sequelize;


// Tasting.associate = model => {
//     Tasting.belongsTo(model.User);
//     return Tasting;
// };
