const router = require('express').Router()

/* validation */
const { validateSchema, validateSchemaType, handleErrorValidate } = require('../validation')
const { userSchema } = require('../validation/schema/user.schema')

/* include controllers */
const vegetable_controller = require('../controllers/vegetable.controller')

/* include helper */
const { checkAuth } = require('../helpers/token.helper')

router.post('/',
  checkAuth,
  vegetable_controller.createVegetable)

router.get('/',
  checkAuth,
  vegetable_controller.getVegetables)

router.patch('/:vegetable_id/behavior',
  checkAuth,
  vegetable_controller.addBehavior)

module.exports = router