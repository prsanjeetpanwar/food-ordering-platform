import { NextFunction, Request,Response } from "express"


// create vendor
export const CreateVendor=async (req:Request,res:Response,next:NextFunction)=>{
    res.send("create vendor")
}