import express from "express";
import { CreateAdmin, GetAdmin, GetAdminById } from "../controllers/admin.controllers";

const AdminRouter=express.Router()



AdminRouter.get("/",GetAdmin)
AdminRouter.post('/',CreateAdmin)
AdminRouter.get('/:id',GetAdminById)



export default AdminRouter