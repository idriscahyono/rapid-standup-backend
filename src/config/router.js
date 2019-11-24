const router = require('express').Router()

router.use('/standup', require('../api/standup/StandupRouter'))
module.exports = router