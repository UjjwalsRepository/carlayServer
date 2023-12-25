import express from "express";
// import { create, deleteUser, getAll, getOne, update } from "../controller/userController.js";
import { create} from "../controller/carController.js";

const route=express.Router();

route.post('/create',create);
// route.get('/getall',getAll);
// route.get('/getone/:id',getOne);
// route.put('/update/:id',update);
// route.delete('/delete/:id',deleteUser);

export default route;