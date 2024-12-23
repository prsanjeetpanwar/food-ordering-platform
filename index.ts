import express from "express";
import {VendorRouter,AdminRouter} from "./routes/index.routes";

const app=express()

app.use('/api/v1/admin',AdminRouter)
app.use('/api/v1/vendor',VendorRouter)


app.listen(3000,()=>{
    console.clear()
    console.log("server started on port 3000")
}
   
   
)