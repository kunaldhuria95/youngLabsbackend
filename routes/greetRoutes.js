import express from "express"
import { getGreeting } from "../controllers/greetController.js"
const router = express.Router();

router.get("/", getGreeting)

export default router