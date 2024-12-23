import { NextFunction, Request, Response } from "express"


// create vendor

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
    res.send("create vendor")
}

//get vendors

export const GetVendors = async (req: Request, res: Response, next: NextFunction) => {
    res.send("get vendors")
}

//get vendor by id

export const GetVendorById = async (req: Request, res: Response, next: NextFunction) => {
    res.send("get vendor by id")
}


