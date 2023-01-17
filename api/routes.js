import { Router } from "express";
import PostRoutes from "./posts/posts.routes.js";
import UserRoutes from "./users/users.routes.js";
const router = Router();

router.use("/posts", PostRoutes);
router.use("/user", UserRoutes);

export default router;
