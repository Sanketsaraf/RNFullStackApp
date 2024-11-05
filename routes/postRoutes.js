const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostsController,
  getUserPostsController,
  deletePostController,
  updatePostController,
} = require("../controllers/postController");

//router object
const router = express.Router();

//CREATE POST || POST
router.post("/create-post", requireSignIn, createPostController);

//GET ALL POSTS
router.get("/get-all-post", getAllPostsController);

//GET user POSTS
router.get("/get-user-post", requireSignIn, getUserPostsController);

//DELETE POST
router.delete("/delete-post/:id", requireSignIn, deletePostController); //: means dynamic value

//UPDATE POST
router.put("/update-post/:id", requireSignIn, updatePostController);

//export
module.exports = router;
