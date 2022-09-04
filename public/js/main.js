const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;



Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo(){
    const todoId = this.parentNode.id
    console.log(this.parentNode.id)
    try{
        const response = await fetch('preventBurnout/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.id
    try{
        const response = await fetch('preventBurnout/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.id
    try{
        const response = await fetch('preventBurnout/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}



[...document.getElementsByClassName('startTimer')].forEach(function(item){
    item.addEventListener("click", function() {
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
})
});


[...document.getElementsByClassName('pauseTimer')].forEach(function(item){
    item.addEventListener("click", function() {
    clearInterval(int)
})
});

[...document.getElementsByClassName('resetTimer')].forEach(function(item){
    item.addEventListener("click", function() {
//.addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
})
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
