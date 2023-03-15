const router = require('express').Router();
const express = require('express');
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

router.get('/', async(req, res) => {
 
});

// get one product
router.get('/:id', async(req, res) => {
 
});


// create new product
router.post('/', async(req, res) => {
  
    
});

// update product
router.put('/:id', async (req, res) => {

      
});


  

module.exports = router;