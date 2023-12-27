import infoRoutes from "@routes/info.route";
import { Router } from "express";

const router = Router();

router.use("/info", infoRoutes);

export default router;
