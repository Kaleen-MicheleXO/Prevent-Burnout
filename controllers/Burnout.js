const Burnout = require('../models/Burnout')

const Health= require('../models/Health')
const Calories=require('../models/Calories')
const User = require('../models/User')

module.exports = {

    // getBurnout: async (req,res)=>{
    //     console.log(req.user)
        
    //     try{
    //         const burnoutItems = await Burnout.find({userId:req.user.id})
    //         const itemsLeft = await Burnout.countDocuments({userId:req.user.id,completed: false})
    //         res.render('Burnout.ejs', { burnout: burnoutItems, left: itemsLeft, user: req.user,  })
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // createBurnout: async (req, res)=>{
      
    //     try{
    //         //const easternTime = new Date().toLocaleString("en-US", {timeZone: 'America/New_York'})
    //         await Burnout.create({Burnout: req.body.BurnoutItem, completed: false, userId: req.user.id, })
    //         console.log('one has been added!')
    //         res.redirect('/preventBurnout')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
 



    // markComplete: async (req, res)=>{
    //     try{
    //         await Burnout.findOneAndUpdate({_id:req.body.BurnoutIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    
    //     try{
    //         await Burnout.findOneAndUpdate({_id:req.body.BurnoutIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete!')
    //         res.json(`${req.body.BurnoutIdFromJSFile}`)
            
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteBurnout: async (req, res)=>{
    //     console.log( req.body.BurnoutIdFromJSFile)
    //     try{
    //         await Burnout.findOneAndDelete({_id:req.body.BurnoutIdFromJSFile})
    //         console.log('Deleted one')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },



    getHealth: async (req,res)=>{
        //console.log(req.user)
        
        try{
            const healthItems = await Health.find({userId:req.user.id})
            const calorieItems = await Calories.find({userId:req.user.id})
          
            const itemsLeft = await Health.countDocuments({userId:req.user.id,completed: false})
            let caloriesLeft=0
            for(let i=0;i<healthItems.length;i++){
                caloriesLeft += healthItems[i].Calories
            }
     
           let time= new Date().getHours() + ":" +  new Date().getMinutes() + ":" +  new Date().getSeconds()
           let timeOfDay;
           if(time>="13:00" && time<="16:00"){
                timeOfDay='Good Afternoon'
           }else if (time>="17:00" && time<="23:00"){
            timeOfDay='Good Evening'
           }else timeOfDay='Good Morning'
    
          
          res.render('Burnout.ejs', {health: healthItems, left: itemsLeft, user: req.user, calories: calorieItems, caloriesLeft:caloriesLeft, timeOfDay:timeOfDay})
        }catch(err){
            console.log(err)
        }
        }, getCalories: async (req,res)=>{
            console.log(res)
            try{
               const calorieItems = await Calories.find({userId:req.user.id})
               // const itemsLeft = await Calories.countDocuments({userId:req.user.id,completed: false})
                res.render('Burnout.ejs', {health: healthItems, left: itemsLeft, user: req.user, calories: calorieItems})
            }catch(err){
                console.log(err)
            }
        },


}    