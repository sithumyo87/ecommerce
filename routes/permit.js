const router = require('express').Router();
const controller = require('../controller/permitController');
const {PermitSchema} = require('../utilies/schema');
const {validateBody} = require('../utilies/validate')

router.post('/',validateBody(PermitSchema.Add),controller.add);

module.exports = router;