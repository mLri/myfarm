/* include models */
const vegetable_plot = require('../models/vegetable_plot.model')

/* include helpers */
const { handleError } = require('../helpers/handle_error.helper')
const statusError = require('../helpers/status_error.helper')

module.exports.getPlots = async (req, res) => {
  try {
    const { _id } = req.user.principal
    const get_vg_plot = await vegetable_plot.find({ user_id: _id })
    res.json(get_vg_plot)
  } catch (error) {
    handleError(error, res)
  }
}

module.exports.createPlot = async (req, res) => {
  try {
    const { _id } = req.user.principal
    const { name, wide, long } = req.body

    const plot_obj = {
      name,
      wide,
      long,
      user_id: _id
    }

    const create_plot = await vegetable_plot.create(plot_obj)

    res.json(create_plot)
  } catch (error) {
    handleError(error, res)
  }
}

module.exports.addVegetable = async (req, res) => {
  try {
    const { vegetable_id } = req.body
    const { plot_id } = req.params

    const plot = await vegetable_plot.findOne({ _id: plot_id })
    if (!plot) throw statusError.bad_request_with_message('Not found this plot!')

    if (!plot.vgs) plot.vgs = []

    const dup_vg = plot.vgs.find( value => String(value.vg_id) === String(vegetable_id))
    if (dup_vg) throw statusError.bad_request_with_message(`Duplicate data vegetable_id ${vegetable_id}!`)

    plot.vgs.push({ vg_id: vegetable_id })
    await plot.save()

    res.json(plot)
  } catch (error) {
    handleError(error, res)
  }
}