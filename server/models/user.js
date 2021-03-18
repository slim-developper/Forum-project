import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  isUser:{
    type:Boolean,
    default:true,required: false
    },isAdmin:{
      type:Boolean,
      default:false,required: false
      }
});

export default mongoose.model("User", userSchema);