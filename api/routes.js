import { Router } from "express";
import PostRoutes from "./posts/posts.routes.js";
const router = Router();

router.use("/posts", PostRoutes);

export default router;
