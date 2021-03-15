"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();
const sequelize = require('./models/index');
const port = 3001;
app.use(cors()); // for cross origin (the API server has to decide to accept requests from another IP adress(different port and different url))
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // always the parser before the router
app.use(router);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        yield sequelize.sync({ force: false, alter: true });
        console.log('Connection with DATABASE success 🍪.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`Example app listening at http://localhost:${port} 🥦 👾`);
}));
//# sourceMappingURL=index.js.map