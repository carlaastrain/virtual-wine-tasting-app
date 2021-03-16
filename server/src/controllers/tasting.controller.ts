import Tasting from '../models/tasting.model';
import { RequestHandler } from 'express'

// Create and Save a new Tasting
export const create: RequestHandler = async (req, res) => {
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
    const data = await Tasting.create(tasting)
        //Tasting.create(tasting)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while creating the Tasting.'
            });
        });
};

// Retrieve all Tastings from the database.
export const findAll: RequestHandler = (req, res) => {
    const id = req.params.id;
    Tasting.findAll({ where: { userId: id } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving tutorials.'
            });
        });
};

// Delete a Tasting with the specified id in the request
export const remove: RequestHandler = (req, res) => {
    const id = req.params.id;

    Tasting.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Tasting was deleted successfully!'
                });
            } else {
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





