import { addToDoController } from "@controllers/to-do/add-to-do.controller";
import { getAllToDoController } from "@controllers/to-do/get-all-to-do.controller";
import { addToDoValidator } from "@validators/to-do/add-to-do.validator";
import { Router } from "express";
import asyncify from "express-asyncify";

const router = asyncify(Router());

router.get("/all", getAllToDoController);
router.post("/", addToDoValidator, addToDoController);

export default router;
