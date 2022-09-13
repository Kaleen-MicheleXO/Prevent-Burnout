const Burnout = require('../models/Burnout')


module.exports = {

    getBurnout: async (req,res)=>{
        console.log(req.user)
        
        try{
            const burnoutItems = await Burnout.find({userId:req.user.id})
            const itemsLeft = await Burnout.countDocuments({userId:req.user.id,completed: false})
            res.render('Burnout.ejs', { burnout: burnoutItems, left: itemsLeft, user: req.user,  })
        }catch(err){
            console.log(err)
        }
    },
    createBurnout: async (req, res)=>{
      
        try{
            //const easternTime = new Date().toLocaleString("en-US", {timeZone: 'America/New_York'})
            await Burnout.create({Burnout: req.body.BurnoutItem, completed: false, userId: req.user.id, })
            console.log('one has been added!')
            res.redirect('/preventBurnout')
        }catch(err){
            console.log(err)
        }
    },
 



    markComplete: async (req, res)=>{
        try{
            await Burnout.findOneAndUpdate({_id:req.body.BurnoutIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
    
        try{
            await Burnout.findOneAndUpdate({_id:req.body.BurnoutIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete!')
            res.json(`${req.body.BurnoutIdFromJSFile}`)
            
        }catch(err){
            console.log(err)
        }
    },
    deleteBurnout: async (req, res)=>{
        console.log( req.body.BurnoutIdFromJSFile)
        try{
            await Burnout.findOneAndDelete({_id:req.body.BurnoutIdFromJSFile})
            console.log('Deleted one')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },

}    