import Car from '../model/carModel.js'


export const create=async(req,res)=>{

    try {
        const carData=new Car(req.body);

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
        const carData=await Car.find();
        if(!carData){
            return res.status(404).json({msg:"user data not found"});
        }
        res.status(200).json(carData);
    } catch (error) {
        res.status(500).json({error:error})
    }
} 

// export const getOne=async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const userExist=await User.findById(id);
//         if(!userExist){
//             return res.status(404).json({msg:"User not exist"});
//         }
//         res.status(200).json(userExist);
        
//     } catch (error) {
//         res.status(500).json({error:error})
//     }
// }


// export const update=async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const userExist=await User.findById(id);
//         if(!userExist){
//             return res.status(404).json({msg:"User not exist"});
//         }
//         const updatedData=await User.findByIdAndUpdate(id,req.body,{new:true})
//         res.status(200).json(updatedData);
        
//     } catch (error) {
//         res.status(500).json({error:error})
//     }
// }

// export const deleteUser=async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const userExist=await User.findById(id);
//         if(!userExist){
//             return res.status(404).json({msg:"User not exist"});
//         }
//         await User.findByIdAndDelete(id)
//         res.status(200).json({msg:"User Deleted Successfully"});
        
//     } catch (error) {
//         res.status(500).json({error:error})
//     }
// }