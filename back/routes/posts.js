const express = require("express");
const router = express.Router();

const postsCtrl = require("../controllers/posts");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer_config");

router.get("/", postsCtrl.getAllPosts);
router.post("/", multer, postsCtrl.createPost);
router.get("/:id", postsCtrl.getOnePost);
router.put("/:id", auth, multer, postsCtrl.updatePost);
router.delete("/:id", auth, postsCtrl.deletePost);
router.post("/:id/like", auth, postsCtrl.like);

module.exports = router;
