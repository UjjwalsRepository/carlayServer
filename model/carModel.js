import mongoose from "mongoose";

const carSchema=new mongoose.Schema({
   
    fuelType:{
        type:String,
        required:true
    }
    ,
    transmission:{
        type:String,
        required:true
    }
    ,
    accidental:{
        type:String,
        required:true
    }
    ,
    insurance:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    regNo:{
        type:String,
        required:true
    }
    ,
    kilometer:{
        type:Number,
        required:true
    },
    insuranceEndDate:{
        type:Date,
        required:true
    },
    // rcImage:{
    //     data:Buffer,
    //     type:String,
    //     required:true
    // },
    // frontImage:{
    //     data:Buffer,
    //     type:String,
    //     required:true
    // }
    // ,
    // rightImage:{
    //     data:Buffer,
    //     type:String,
    //     required:true
    // }
    // ,
    // leftImage:{
    //     data:Buffer,
    //     type:String,
    //     required:true
    // }
    // ,
    // rearImage:{
    //     data:Buffer,
    //     type:String,
    //     required:true
    // },
    // seatImage:{
    //     data:Buffer,
    //     type:String,
    //     required:true
    // }
    // ,
    // odometerImage:{
    //     data:Buffer,
    //     type:String,
    //     required:true
    // }
    
    
})

export default mongoose.model("Car",carSchema)