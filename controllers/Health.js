
const Health= require('../models/Health')
const Calories=require('../models/Calories')
const User = require('../models/User')

module.exports = {
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

        let Breakfast=0
        let Lunch=0
        let Dinner=0
        for(let i=0;i<healthItems.length;i++){
            if(healthItems[i].Meal==='Breakfast'){
                Breakfast += healthItems[i].Calories
            }else if(healthItems[i].Meal==='Lunch'){
                Lunch += healthItems[i].Calories
            }else Dinner += healthItems[i].Calories

        }
        
      res.render('health.ejs', {health: healthItems, left: itemsLeft, user: req.user, calories: calorieItems, caloriesLeft:caloriesLeft, Breakfast:Breakfast, Lunch:Lunch,Dinner:Dinner,})
    }catch(err){
        console.log(err)
    }
    },


createHealth: async (req, res)=>{
  console.log(req)
    try{
        //const easternTime = new Date().toLocaleString("en-US", {timeZone: 'America/New_York'})
        await Health.create({Date: req.body.Date, completed: false, userId: req.user.id, Meal: req.body.Meal,Description: req.body.Description,Calories:req.body.Calories })
        console.log('one has been added!')
        res.redirect('/preventBurnout/health')
    }catch(err){
        console.log(err)
    }
    },

    
    deleteHealth: async (req, res)=>{
    console.log( req.body.healthIdFromJSFile)
    console.log(hellpp)
    try{
        
        await Health.findOneAndDelete({_id:req.body.healthIdFromJSFile})
        console.log('Deleted one')

        res.json('Deleted It')
    }catch(err){
        console.log(err)
    }
    },






    getCalories: async (req,res)=>{
         console.log(res)
         try{
            const calorieItems = await Calories.find({userId:req.user.id})
            // const itemsLeft = await Calories.countDocuments({userId:req.user.id,completed: false})
             res.render('health.ejs', {health: healthItems, left: itemsLeft, user: req.user, calories: calorieItems})
         }catch(err){
             console.log(err)
         }
     },
     createCalories: async (req, res)=>{
         // console.log(req.body.Calories)
         try{
            // console.log(res)
             await Calories.create({Calories: req.body.Calories, userId:req.user.id, completed: false})
             console.log('Calories has been added!')
             res.redirect('/preventBurnout/health')
         }catch(err){
             console.log('Error Branch')
             console.log(err)
         }
     },
     
}