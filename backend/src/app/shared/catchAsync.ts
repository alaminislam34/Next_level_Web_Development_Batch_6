import { NextFunction, Request, Response } from "express";

export const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res, next);
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error?.message,
      });
    }
  };
};
