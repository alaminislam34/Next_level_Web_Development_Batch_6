import { Router } from "express";
import { SpecialtyRouter } from "../module/specialty/specialty.routes";

const router = Router();

router.use("/specialties", SpecialtyRouter);

export const IndexRoutes = router;
