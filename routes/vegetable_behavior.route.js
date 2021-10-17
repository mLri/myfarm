const router = require('express').Router()

/* validation */
const { validateSchema, validateSchemaType, handleErrorValidate } = require('../validation')
const { userSchema } = require('../validation/schema/user.schema')

/* include controllers */
const vgbh_controller = require('../controllers/vegetable_behavior.controller')

/* include helper */
const { checkAuth } = require('../helpers/token.helper')

router.post('/',
  checkAuth,
  vgbh_controller.createVegetableBehavior)

router.get('/',
  checkAuth,
  vgbh_controller.getVegetablesBehavior)

module.exports = router