const router = require("express").Router();
const { Category, Product } = require("../../models");
const { findAll } = require("../../models/Product");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const catData = await Category.findAll({ include: [Product] });
    res.status(200).json(catData);
  } catch (e) {
    res.status(500).json(e);
  }
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const catDataId = await Category.findByPk(req.params.id, {
      include: [Product],
    });
    if (!catDataId) {
      res.status(404).json[{ message: "No category was found with this id" }];
      return;
    }
    res.status(200).json(catDataId);
  } catch (e) {
    res.status(500).json(e);
  }
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  try {
    const catDataPost = await Category.create(req.body);
    res.status(200).json(catDataPost);
  } catch (e) {
    res.status(400).json(e);
  }
  // create a new category
});

router.put("/:id", async (req, res) => {
  try {
    const catDataIdPut = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!catDataIdPut) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }
    res.status(200).json(catDataIdPut);
  } catch (e) {
    res.status(500).json(e);
  }
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const catDataIdDelete = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!catDataIdDelete) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }

    res.status(200).json(catDataIdDelete);
  } catch (e) {
    res.status(500).json(e);
  }
  // delete a category by its `id` value
});

module.exports = router;
