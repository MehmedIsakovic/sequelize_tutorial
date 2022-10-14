const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

router.get("/:postId", async (req, res) => {
  const { postId } = req.params;
  const comments = await Comments.findAll({
    where: {
      post_id: postId,
    },
  });
  res.json(comments);
});

router.post("/", async (req, res) => {
  const { comment, user_id, post_id } = req.body;
  const newComment = await Comments.create({
    comment,
    user_id,
    post_id,
  });
  res.json(newComment);
});

module.exports = router;
