import { getAllToDoController } from "@controllers/to-do/get-all-to-do.controller";
import { Router } from "express";
import asyncify from "express-asyncify";

const router = asyncify(Router());

router.get("/all", getAllToDoController);

export default router;
