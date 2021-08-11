'use strict';

const express = require('express');

const router = express.Router();
const { Food } = require('../models/index');

// add routes
router.get('/food', getFood);
router.get('/food/:id', getOneFood);

router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);


async function getFood(req, res) {

    let food = await Food.findAll();
    res.status(200).json(food);
}

async function getOneFood(req, res) {
    const id = parseInt(req.params.id); // req.params is an object 
    let food = await Food.findOne({ where: {id: id} });
    res.status(200).json(food);
}

async function createFood(req, res) {
    let newFood = req.body;
    console.log(newFood)

    let food = await Food.create(newFood);
    res.status(200).json(food)
    
}

async function updateFood(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    // find the food
    let found = await Food.findOne({ where: {id: id} });
    // update + save
    let updatedFood = await found.update(obj);
    res.status(200).json(updatedFood);
}

async function deleteFood(req,res) {
    let id = parseInt(req.params.id);
    let deletedFood = await Food.destroy({where: {id: id}});
    res.status(204).json(deletedFood);
}



module.exports = router;