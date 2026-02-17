import express from "express";
import { specialtyController } from "./specialty.controller";

const router = express.Router();

router.post("/", specialtyController.createSpecialty);
router.get("/", specialtyController.getAllSpecialties);
router.delete("/:id", specialtyController.deleteSpecialty);
router.put("/:id", specialtyController.updateSpecialty);

export const SpecialtyRouter = router;
