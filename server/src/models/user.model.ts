import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';


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

export default User; 