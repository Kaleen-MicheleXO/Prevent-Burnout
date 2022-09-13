const express = require('express')
const router = express.Router()
const healthController = require('../controllers/Health.js') 
const { ensureAuth } = require('../middleware/auth')

router.get('/',healthController.getHealth)
router.post('/createHealth', healthController.createHealth)
router.delete('/deleteHealth', healthController.deleteHealth)



router.post('/createCalories', healthController.createCalories)
router.get('/', healthController.getCalories)
module.exports = router