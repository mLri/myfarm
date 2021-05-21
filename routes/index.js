const router = require('express').Router()

router.use('/auth', require('./auth.route'))
router.use('/plots', require('./vegetable_plot.route'))
router.use('/vegetable', require('./vegetable.route'))

module.exports = router