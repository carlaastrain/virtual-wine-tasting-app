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
const User = require('../models/user.model');
// Create and save a new User
exports.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate request
    if (!req.body.mail) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
        return;
    }
    // Create a new user
    const user = {
        mail: req.body.mail,
        password: req.body.password,
    };
    // Save user in the database
    yield User.create(user)
        //User.create(tasting)
        .then(data => {
        res.send(data);
    })
        .catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the User.'
        });
    });
});
// GET USER BY ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(data => {
        res.send(data);
    })
        .catch(err => {
        res.send(err);
        res.status(500).send({
            message: 'Error retrieving User with id=' + id
        });
    });
};
exports.findAllUsers = (req, res) => {
    User.findAll()
        .then(data => {
        res.send(data);
    })
        .catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving users.'
        });
    });
};
//# sourceMappingURL=user.controller.js.map