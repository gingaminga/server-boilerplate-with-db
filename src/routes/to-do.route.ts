import { addToDoController } from "@controllers/to-do/add-to-do.controller";
import { getAllToDoController } from "@controllers/to-do/get-all-to-do.controller";
import { modifyContentController } from "@controllers/to-do/modify-content.controller";
import { addToDoValidator } from "@validators/to-do/add-to-do.validator";
import { modifyContentValidator } from "@validators/to-do/modify-content.validator";
import { Router } from "express";
import asyncify from "express-asyncify";

const router = asyncify(Router());

router.get("/all", getAllToDoController);
router.post("/", addToDoValidator, addToDoController);
router.patch("/content/:id", modifyContentValidator, modifyContentController);

export default router;
