const DB = require('../models/permit');
const Helper = require('../utilies/helper');

const add = async(req,res,next) => {
    let permitName = await DB.findOne({name:req.body.name});
    if(permitName){
        next(new Error("Permit Name already Exists!!"));
    }else{
        let permitData = await new DB(req.body).save();
        Helper.fMsg(res,"Permit Uploaded",permitData)
    }
}

module.exports = {
    add
}