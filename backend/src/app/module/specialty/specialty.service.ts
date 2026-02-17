import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (payload: Specialty): Promise<Specialty> => {
  try {
    const specialty = await prisma.specialty.create({
      data: payload,
    });
    return specialty;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllSpecialties = async () => {
  try {
    const specialties = await prisma.specialty.findMany();
    return specialties;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteSpecialty = async (id: string) => {
  try {
    const specialty = await prisma.specialty.delete({
      where: { id },
    });
    return specialty;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateSpecialty = async (
  id: string,
  payload: Specialty,
): Promise<Specialty> => {
  try {
    const specialty = await prisma.specialty.update({
      where: { id },
      data: payload,
    });
    return specialty;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const specialtyService = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
  updateSpecialty,
};
