import express from 'express';
import { CreateVendor, GetVendorById, GetVendors } from '../controllers/vendor.controllers';


const VendorRouter=express.Router()

VendorRouter.get('/',GetVendors)
VendorRouter.post('/',CreateVendor)
VendorRouter.get('/',GetVendorById)


export default VendorRouter