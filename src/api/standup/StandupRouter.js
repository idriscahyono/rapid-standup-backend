const router = require('express').Router()
const StandupController = require('./StandupController')

router.get('/', StandupController.index)
router.get('/:id', StandupController.show)
router.post('/', StandupController.store)
router.put('/:id', StandupController.update)
router.delete('/:id', StandupController.destroy)

module.exports = router