'use strict';
import express from 'express';
import * as tastings from './controllers/tasting.controller';
import * as user from './controllers/user.controller';

const router = express.Router();

// TASTINGS
// Create a new Tasting
router.post('/api/tastings', tastings.create);

// Retrieve all tastings
router.get('/api/tastings/:userId', tastings.findAll);

// Delete a Tasting with id
router.delete('/api/tastings/:id', tastings.remove);

// // Retrieve a single Tasting with id
// router.get("/:id", tastings.findOne);

// // Update a Tasting with id
// router.put("/:id", tastings.update);

// USER
// Create a new user
router.post('/api/user', user.create);

//Get user from db with id
router.get('/api/user/:id', user.findOne);

//GET ALL USER FROM DB 
router.get('/api/allusers', user.findAllUsers);

// router.get("/api/:mail", user.findOneByMail)


export default router;


