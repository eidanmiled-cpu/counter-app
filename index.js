let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
const resetBtn= document.getElementById("reset-btn")
function increment() {
    count +=1
    countEl.innerText = count
}
document.getElementById("save-btn")
function save(){
    let countStr = count+" - "
   countEl.textContent = 0
    count = 0
    saveEl.textContent += countStr
    console.log(count)
}
    
function reset(){
   location.reload();
return false;
}
