const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({ include: [Product] });
    res.status(200).json(tagData);
  } catch (e) {
    res.status(500).json(e);
  }
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagDataId = await Tag.findByPk(req.params.id, {
      include: [Product],
    });
    if (!tagDataId) {
      res.status(404).json[{ message: "No tag was found with this id" }];
      return;
    }
    res.status(200).json(tagDataId);
  } catch (e) {
    res.status(500).json(e);
  }
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.proTagIds.length && req.body.proTagIds) {
        const productTagIdArr = req.body.proTagIds.map((product_id) => {
          return {
            tag_id: tag.id,
            product_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(tag);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((e) => {
      console.log(e);
      res.status(400).json(e);
    });
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagDataIdPut = await Tag.update({
      where: {
        id: req.params.id,
      },
    });

    if (!tagDataIdPut) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    res.status(200).json(tagDataIdPut);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagDataIdDelete = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagDataIdDelete) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }

    res.status(200).json(tagDataIdDelete);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
