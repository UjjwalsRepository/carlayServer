import AdminCar from '../model/adminCarModel.js'
import multer from "multer";

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

export const upload=multer({storage:storage})


export const addCar=async(req,res)=>{
    try {
        const carData=new AdminCar(req.body);

        if(!carData){
            return res.status(404).json({msg:"car data not found"})
        }
        const savedData=await carData.save();
        res.status(200).json(savedData);
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getAllCar=async(req,res)=>{
    try {
        const carData=await AdminCar.find();
        if(!carData){
            return res.status(404).json({msg:"Car data not found"});
        }
        res.status(200).json(carData);
    } catch (error) {
        res.status(500).json({error:error})
    }
} 

export const getOne=async(req,res)=>{
    try {
        const id=req.params.id;
        const carExist=await AdminCar.findById(id);
        if(!carExist){
            return res.status(404).json({msg:"Car not exist"});
        }
        res.status(200).json(carExist);
        
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const updateCarDetails=async(req,res)=>{
    try {
        const id=req.params.id;
        const carExist=await AdminCar.findById(id);
        if(!carExist){
            return res.status(404).json({msg:"Car not exist"});
        }
        const updatedData=await AdminCar.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updatedData);
        
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const deleteCar=async(req,res)=>{
    try {
        const id=req.params.id;
        const carExist=await AdminCar.findById(id);
        if(!carExist){
            return res.status(404).json({msg:"User not exist"});
        }
        await AdminCar.findByIdAndDelete(id)
        res.status(200).json({msg:"Car Deleted Successfully"});
        
    } catch (error) {
        res.status(500).json({error:error})
    }
}