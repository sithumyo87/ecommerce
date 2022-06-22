const router= require('express').Router();
const controller = require('../controller/roleController');
const {validateBody} = require('../utilies/validate');
const {PermitSchema,RoleAddPermit, AllSchema} = require('../utilies/schema')

router.post('/',[PermitSchema.Add,controller.add]);
router.get('/',controller.get);
router.patch('/Roleadd',[RoleAddPermit.PermitAdd,controller.RoleAddPermit]);
router.delete('/Roleremove',[RoleAddPermit.PermitAdd,controller.RoleRemovePermit]);
router.route('/:id')
.get(controller.getOne)
.patch(validateBody(AllSchema.Id),controller.editRole)
.delete(validateBody(AllSchema.Id),controller.dropRole)

module.exports = router;