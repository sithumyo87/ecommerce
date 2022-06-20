const mongoose = require('mongoose');
const { Schema } = mongoose;

const roleSchema = new Schema({
    name:{type:String,required:true,unique:true},
    permits:{type:Schema.Types.ObjectId,ref:'permit',required:true},
    created:{type:Date,default:Date.now}
})

const role = mongoose.model("role",UserSchema);
module.exports = role;