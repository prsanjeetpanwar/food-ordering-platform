import { Request, Response, NextFunction } from "express";

//create Admin

export const CreateAdmin = async (req: Request, res: Response, next: NextFunction) => {
    res.send("create admin")
}

//get admin

export const GetAdmin = async (req: Request, res: Response, next: NextFunction) => {
    res.send("get admin")
}

//get admin by id

export const GetAdminById = async (req: Request, res: Response, next: NextFunction) => {
    res.send("get admin by id")
}