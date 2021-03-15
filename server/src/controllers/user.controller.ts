import User from '../models/user.model';
import {RequestHandler} from 'express'

// Create and save a new User
export const create: RequestHandler = async (req, res) => {
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
    await User.create(user)
    //User.create(tasting)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
          err.message || 'Some error occurred while creating the User.'
            });
        });
};


// GET USER BY ID
export const findOne: RequestHandler = (req, res) => {
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


export const findAllUsers: RequestHandler = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
          err.message || 'Some error occurred while retrieving users.'
            });
        });
};
