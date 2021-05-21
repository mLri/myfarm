const router = require('express').Router()

/* validation */
const { validateSchema, validateSchemaType, handleErrorValidate } = require('../validation')
const { userSchema } = require('../validation/schema/user.schema')

/* include controllers */
const vegetable_plot_controller = require('../controllers/vegetable_plot.controller')

/* include helper */
const { checkAuth } = require('../helpers/token.helper')

router.get('/',
  checkAuth,
  vegetable_plot_controller.getPlots)

router.post('/',
  checkAuth,
  vegetable_plot_controller.createPlot)

router.patch('/:plot_id/vegetable',
  checkAuth,
  vegetable_plot_controller.addVegetable)

module.exports = router