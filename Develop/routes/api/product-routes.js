const router = require('express').Router();
const express = require('express');
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

router.get('/', async (req, res) => {
    try {
        const allProducts = await Products.findAll({
            
        })
        console.log()
        res.json(allProducts) 
        }
    catch (err) {
            res.status(500).json(err)
        }
    }
});

// get one product
router.get('/:id', async (req, res) => {

});


// create new product
router.post('/', async (req, res) => {
    try {
        const result = await Product.create(req.body)
        res.json(result)
    } catch (err) {
        res.status(500).json(err)
    }

});

// update product
router.put('/:id', async (req, res) => {


});




module.exports = router;