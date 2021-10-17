/* include models */
const Vegetable = require('../models/vegetable.model')

/* include helpers */
const { handleError } = require('../helpers/handle_error.helper')
const statusError = require('../helpers/status_error.helper')

module.exports.getVegetables = async (req, res) => {
  try {
    const { _id } = req.user.principal
    const get_vg = await Vegetable.find({ user_id: _id })
    res.json(get_vg)
  } catch (error) {
    handleError(error, res)
  }
}

module.exports.createVegetable = async (req, res) => {
  try {
    const { _id } = req.user.principal
    const { name, detail } = req.body

    const vg_obj = {
      name,
      detail,
      user_id: _id
    }

    const create_vg = await Vegetable.create(vg_obj)

    res.json(create_vg)
  } catch (error) {
    handleError(error, res)
  }
}

module.exports.addBehavior = async (req, res) => {
  try {
    const { behavior_id } = req.body
    const { vegetable_id } = req.params

    let vg = await Vegetable.findOne({ _id: vegetable_id })

    vg.vgbh_id = behavior_id
    await vg.save()

    res.json(vg)
  } catch (error) {
    handleError(error, res)
  }
}