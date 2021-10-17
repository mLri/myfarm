/* include models */
const vegetable_behavior = require('../models/vegetable_behavior.model')

/* include helpers */
const { handleError } = require('../helpers/handle_error.helper')
const statusError = require('../helpers/status_error.helper')

module.exports.getVegetablesBehavior = async (req, res) => {
  try {
    const { _id } = req.user.principal
    const get_vgbh = await vegetable_behavior.find({ user_id: _id })
    res.json(get_vgbh)
  } catch (error) {
    handleError(error, res)
  }
}

module.exports.createVegetableBehavior = async (req, res) => {
  try {
    const { _id } = req.user.principal
    const { name, behavior } = req.body

    const vgbh_obj = {
      name,
      behavior,
      user_id: _id
    }

    const create_vgbh = await vegetable_behavior.create(vgbh_obj)

    res.json(create_vgbh)
  } catch (error) {
    handleError(error, res)
  }
}