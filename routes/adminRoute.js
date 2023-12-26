import express from "express";

// import { create, deleteUser, getAll, getOne, update } from "../controller/userController.js";
import {addCar,getAllCar,getOne,updateCarDetails,deleteCar} from "../controller/adminCarController.js";

import {upload} from "../controller/adminCarController.js";
 
const adminRoute=express.Router();

adminRoute.post('/adminCreate',addCar);
adminRoute.get('/getAllCar',getAllCar);
adminRoute.get('/getone/:id',getOne);
adminRoute.put('/update/:id',updateCarDetails);
adminRoute.delete('/delete/:id',deleteCar);

export default adminRoute;