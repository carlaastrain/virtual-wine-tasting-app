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
const Tasting = require('../models/tasting.model');
// Create and Save a new Tasting
exports.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate request
    //if (!req.body.user) {
    if (!req.body.winery) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
        return;
    }
    // Create a Tasting
    const tasting = {
        userId: req.body.userId,
        winery: req.body.winery,
        year: req.body.year,
        grape: req.body.grape,
        fruit: req.body.fruit,
        acidity: req.body.acidity,
        tannins: req.body.tannins,
        body: req.body.year,
        dominantFlavors: req.body.dominantFlavors,
        arrPossibleFlavors: req.body.arrPossibleFlavors,
        overallRating: req.body.overallRating,
    };
    // Save Tasting in the database
    yield Tasting.create(tasting)
        //Tasting.create(tasting)
        .then(data => {
        res.send(data);
    })
        .catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the Tasting.'
        });
    });
});
// Retrieve all Tastings from the database.
exports.findAll = (req, res) => {
    const id = req.params.id;
    // const user = req.query.user;
    // let condition = user ? { user: { [Op.iLike]: `%${user}%` } } : null;
    //Tasting.findAll({ where: condition })
    Tasting.findAll({ where: { userId: id } })
        .then(data => {
        res.send(data);
    })
        .catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving tutorials.'
        });
    });
};
// Delete a Tasting with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Tasting.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
                message: 'Tasting was deleted successfully!'
            });
        }
        else {
            res.send({
                message: `Cannot delete Tasting with id=${id}. Maybe Tasting was not found!`
            });
        }
    })
        .catch(err => {
        res.send(err);
        res.status(500).send({
            message: 'Could not delete Tasting with id=' + id
        });
    });
};
// // Find a single Tasting with an id
// exports.findOne = (req, res) => {
// };
// // Update a Tasting by the id in the request
// exports.update = (req, res) => {
// };
//# sourceMappingURL=tasting.controller.js.map