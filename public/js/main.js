const deleteBtn = document.querySelectorAll('.del')
// const BurnoutItem = document.querySelectorAll('span.not')
// const BurnoutComplete = document.querySelectorAll('span.completed')
const delete1= document.querySelectorAll('.delete1')



Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteBurnout)
})


Array.from(delete1).forEach((el)=>{
    el.addEventListener('click', deleteHealth)
})


// Array.from(BurnoutItem).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })

// Array.from(BurnoutComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

async function deleteBurnout(){
    const BurnoutId = this.parentNode.id
    console.log(this.parentNode)
    try{
        const response = await fetch('preventBurnout/deleteBurnout', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'BurnoutIdFromJSFile': BurnoutId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}



async function deleteHealth(){
    const healthId = this.parentNode.id
    console.log(healthId)


    try{
      
        const response = await fetch('preventBurnout/health/deleteHealth', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'healthIdFromJSFile': healthId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}











// async function markComplete(){
//     const BurnoutId = this.parentNode.id
//     try{
//         const response = await fetch('preventBurnout/markComplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'BurnoutIdFromJSFile': BurnoutId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markIncomplete(){
//     const BurnoutId = this.parentNode.id
//     try{
//         const response = await fetch('preventBurnout/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'BurnoutIdFromJSFile': BurnoutId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }



