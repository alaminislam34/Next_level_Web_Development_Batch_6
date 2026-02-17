import { Request, Response } from "express";
import { specialtyService } from "./specialty.service";
import { catchAsync } from "../../shared/catchAsync";

const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await specialtyService.createSpecialty(payload);
  res.status(201).json({
    success: true,
    message: "Specialty created successfully",
    data: result,
  });
});

const getAllSpecialties = catchAsync(async (req: Request, res: Response) => {
  const specialties = await specialtyService.getAllSpecialties();
  res.status(200).json({
    success: true,
    message: "Specialties retrieved successfully",
    data: specialties,
  });
});

const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Specialty ID is required",
    });
  }
  const specialty = await specialtyService.deleteSpecialty(id as string);
  res.status(200).json({
    success: true,
    message: "Specialty deleted successfully",
    data: specialty,
  });
});

const updateSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Specialty ID is required",
    });
  }
  const specialty = await specialtyService.updateSpecialty(
    id as string,
    payload,
  );
  res.status(200).json({
    success: true,
    message: "Specialty updated successfully",
    data: specialty,
  });
});

export const specialtyController = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
  updateSpecialty,
};
