const router = require("express").Router();
const categoryRoutes = require("./category-routes.js")
const productsRoutes = require("./product-routes.js")
const tagRoutes = require("./tag-routes.js")

router.use("/categories",categoryRoutes);
router.use("/product",productsRoutes);
router.use("/tag",tagRoutes);

  module.exports = router;