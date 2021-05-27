const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get("/", async (req, res) => {
  try {
    const categoryProductData = await Category.findAll({
      incldue: [{ model: Product }],
    });
    res.status(200).json(categoryProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get("/:id", async (req, res) => {
  try {
    const categoryProductData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryProductData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post("/", async (req, res) => {
  try {
    const categoryProductData = await Category.create(req.body);
    res.status(200).json(categoryProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const categoryProductData = await Category.update({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryProductData) {
      res.status(404).json({ message: "No category found with that id" });
      return;
    }

    res.status(200).json(categoryProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const categoryProductData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryProductData) {
      res.status(404).json({ message: "No category found with that id" });
      return;
    }

    res.status(200).json(categoryProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
