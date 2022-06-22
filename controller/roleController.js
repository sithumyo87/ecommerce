const DB = require('../models/role');
const Helper = require('../utilies/helper');

const add = async(req,res,next) => {
    let roleName = await DB.findOne({name:req.params.name});
    if(roleName){
        next(new Error("You role name already exists!!"));
    }else{
        let result = await new DB(req.body).save();
        Helper.fMsg(res,"Role successfully Added",result);
    }
}

const get = async(req,res,next) => {
    let roleAll = await DB.find();
    if(roleAll){
        Helper.fMsg(res,"All Roles",roleAll)
    }else{
        next(new Error("Nothing Roles"))
    }
}

const getOne = async(req,res,next) => {
    let roleId = await DB.findById(req.params.id);
    if(roleId){
        Helper.fMsg(res,"Get role BY Id",roleId);
    }else{
        next(new Error("Cannot Search By Id"))
    }
}

const editRole = async(req,res,next) => {
let roleId = await DB.findById(req.params.id);
    if(roleId){
        let roleUpd = await DB.findByIdAndUpdate(roleId,req.body);
        let result = await DB.findById(roleUpd);
        Helper.fMsg(res,"Update Role",result);
    }else{
        next(new Error("Editing Access Denied!!"))
    }
}

const dropRole = async(req,res,next) => {
    let roleId = await DB.findById(req.params.id);
    if(roleId){
        await DB.findByIdAndDelete(roleId);
        Helper.fMsg(res,"Successfully Deleted");
    }else{
        next(new Error("Deleted Access Denied"))
    }
}

const  RoleAddPermit = async(req,res,next) =>{
    let roleId = await DB.findById(req.params.id);
    let permitId = await DB.findById(req.parmas.id);
    if(roleId & permitId){
        await DB.findByIdAndUpdate(roleId._id,{$push:{permit:permitId._id}})
        let result = await DB.findById(req.params.id);
        Helper.fMsg(res,"Add Permit to role",result);
    }else{
        next(new Error("Add Role to permit Accessed Denied"))
    }
}

const  RoleRemovePermit = async(req,res,next) =>{
    let roleId = await DB.findById(req.params.id);
    let permitId = await DB.findById(req.parmas.id);
    if(roleId & permitId){
        await DB.findByIdAndUpdate(roleId._id,{$pull:{permit:permitId._id}})
        let result = await DB.findById(req.params.id);
        Helper.fMsg(res,"Add Permit to role",result);
    }else{
        next(new Error("Add Role to permit Accessed Denied"))
    }
}

module.exports = {
    add,
    get,
    getOne,
    editRole,
    dropRole,
    RoleAddPermit,
    RoleRemovePermit
}