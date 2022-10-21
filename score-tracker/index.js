let saveBtn = document.getElementById("save-btn")
let incrementBtn = document.getElementById("increment-btn")
let currentCount = document.getElementById("count-el")
let savedEntry = document.getElementById("save-el")
let count = 0

function increment(){
    count += 1
    currentCount.textContent =count 
}

function save(){
    savedEntry.textContent += count + " - "
    currentCount.textContent = 0
    
    count = 0

}