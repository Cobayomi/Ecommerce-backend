const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const categoriesData = await Category.findAll({
            include: [{ model: Product }]
        });
        res.status(200).json(categoriesData);
    }
    catch (err) {
        res.status(404).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const onecategory = await Category.findByPk(req.params.id, {
            include: [{ model: Product }]
        });

        if (!onecategory) {
            res.status(500).json({ message: "Category id not found!" });
            return;
        }
        res.status(200).json(onecategory);
    } catch (err) {
        res.send(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const createcategory = await Category.create(req.body);
        return res.status(200).json(createcategory);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const result = await Category.update(req, body, {
            where: {
                id: req.params.id,
            },
        })
        res.json(result)
    }
    catch (err) {
        res.status(400).json(err);
    }

});

router.delete('/:id', async (req, res) => {
    try{
        const result = await Category.destory({
            where: {
                id: req.params.id
            },
        });
        res.json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;