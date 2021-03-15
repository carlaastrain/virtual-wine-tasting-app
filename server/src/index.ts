import express from 'express'; 
import cors from 'cors';
import router from './router';
import sequelize from './models/index';
const app = express();
const port = 3001; 


app.use(cors()); // for cross origin (the API server has to decide to accept requests from another IP adress(different port and different url))
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // always the parser before the router
app.use(router);
app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false, alter: true });
        console.log('Connection with DATABASE success 🍪.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`Example app listening at http://localhost:${port} 🥦 👾`);
});





