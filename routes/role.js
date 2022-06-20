const router= require('express').Router();
const controller = require('../controller/roleController');
const {validateBody} = require('../utilies/validate');
const {PermitSchema} = require('../utilies/schema')

router.post('/',[PermitSchema.Add,controller.add]);
router.get('/',controller.get);
router.route('/:id')
.get(controller.getOne)
.patch(controller.editRole)
.delete(controller.dropRole)

module.exports = router;