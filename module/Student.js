import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    
    isDeleted:{
        type: Boolean,
        default: false,
    },
    name:{
        type:String,
        required: true,
    },
    gender:{
        type:String,
        required: true,
    },
    class:{
        type:String,
        required: true,
    },
    age:{
        type:String,
        required: true,
    },
    grad_point:{
        type:Number,
        required: true,
    },
},
{timestamps:true}
);


export default mongoose.model("Student", StudentSchema)