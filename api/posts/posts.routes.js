import { Router } from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "./posts.controllers.js";

const router = Router();

router.route("/").get(getPosts);
router.route("/:id").get(getPost);
router.route("/").post(addPost);
router.route("/:id").delete(deletePost);
router.route("/:id").patch(updatePost);

export default router;
