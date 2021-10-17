const router = require('express').Router()

router.use('/auth', require('./auth.route'))
router.use('/plots', require('./vegetable_plot.route'))
router.use('/vegetables', require('./vegetable.route'))
router.use('/vgbhs', require('./vegetable_behavior.route'))

module.exports = router