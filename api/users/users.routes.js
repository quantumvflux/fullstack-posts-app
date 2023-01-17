import { Router } from "express";
import { getUsers, login, register } from "./users.controllers.js";
const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/users").get(getUsers);

export default router;
