import { checkServerInfoController } from "@controllers/info.controller";
import { Router } from "express";

const router = Router();

router.get("/", checkServerInfoController);

export default router;
