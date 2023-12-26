import mongoose from "mongoose";

const adminCarSchema=new mongoose.Schema({
   
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
    expectedPrice:{
        type:Number,
        required:true
    }
    ,
    manufacturer:{
        type:String,
        required:true
    },
    variant:{
        type:String,
        required:true
    },
    mfgYear:{
        type:Number,
        required:true
    },
    ownership:{
        type:Number,
        required:true
    },
    regState:{
        type:String,
        required:true

    },
    // fullImage:{
    //     data:Buffer,
    //     type:String,
    // }
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

export default mongoose.model("AdminCar",adminCarSchema)