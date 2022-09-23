const express = require('express')
const router = express.Router()
const BurnoutController = require('../controllers/Burnout') 
const { ensureAuth } = require('../middleware/auth')

//router.get('/', ensureAuth, BurnoutController.getBurnout)
router.get('/',ensureAuth,BurnoutController.getHealth)
router.get('/', BurnoutController.getCalories)
// router.post('/createBurnout', BurnoutController.createBurnout)

// router.put('/markComplete', BurnoutController.markComplete)

// router.put('/markIncomplete', BurnoutController.markIncomplete)

// router.delete('/deleteBurnout', BurnoutController.deleteBurnout)






module.exports = router