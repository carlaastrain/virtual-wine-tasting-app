import { Sequelize } from 'sequelize';
require('dotenv').config();

const sequelize = new Sequelize('testwine6','postgres',process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    // what is logging and pool doing
    logging: false,
    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
        max: 5, //maximum number of connection in pool
        min: 0, //minimum number of connection in pool
        acquire: 30000,
        idle: 10000 //maximum time, in milliseconds, that a connection can be idle before being released
    },
});

export default sequelize;


