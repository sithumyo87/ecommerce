const Joi = require('joi');

module.exports = {
    PermitSchema : {
        Add : Joi.object({
            name:Joi.string().required(),
        })
    },
    RoleAddPermit:{
        PermitAdd: Joi.object({
            roleId:Joi.string().regex(/^[A-Fa-f0-9]{24}$/),
            permitId:Joi.string().regex(/^[A-Fa-f0-9]{24}$/)
        }),
    },
    AllSchema:{
        Id:Joi.object({
            id:Joi.string().regex(/^[A-Fa-f0-9]{24}$/)
        })
        
    }
}