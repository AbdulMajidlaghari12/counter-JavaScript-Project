const numDisplay = document.querySelector('span');
const lowerCountBtn = document.querySelector("#lower");
const addCountBtn = document.querySelector('#add');

let number = 0;

function addCount()
{
    
    ++number
    number > 0 ? numDisplay.style.color = "green" : numDisplay.style.color = "red"
    if(number===0) numDisplay.style.color = "black"
    numDisplay.textContent = number
    
}

function lowerCount()
{
    --number
    number < 0 ? numDisplay.style.color = "red" : numDisplay.style.color = "green"
    if (number === 0) numDisplay.style.color = "black";
    numDisplay.textContent = number 
    
}


// color function 


//Event lisner 

lowerCountBtn.addEventListener('click',lowerCount,)
addCountBtn.addEventListener('click',addCount)