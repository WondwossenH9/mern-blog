const express = require("express");
const { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } = require("../controllers/blogController");

const router = express.Router();

router.get("/", getBlogs); // Get all blogs
router.get("/:id", getBlogById); // Get single blog
router.post("/", createBlog); // Create blog
router.put("/:id", updateBlog); // Update blog
router.delete("/:id", deleteBlog); // Delete blog

module.exports = router;
