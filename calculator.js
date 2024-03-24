// let btn= document.querySelectorAll('.button')

// btn.forEach((item) =>{
//     item.addEventListener("click",()=>{
//         // databox.push(item.innerText)
//         // output.innerText= databox
        
//     })
// })

let firstNumber
let secondNumber

let step = 0

let opertion

let result= 0

let numArray= []
let secondNumArray= []

let display=document.querySelector("#display")


function getNumber(num) {
    if (step===0||step===1){
        numArray.push(num)
        step = 1
        firstNumber= Number(numArray.join(''));
        display.innerText=firstNumber

    }   else if(step ===2){
        secondNumArray.push(num)
        secondNumber = Number(secondNumArray.join(''))
        display.value = secondNumber

    } 
}


function getOperator(op) {
    step = 2
    opertion = op
}

function clearDisplay(){
    display.value = 0
    firstNumber = null
    secondNumber = null
    step=0
    opertion = null
    result = 0
    numArray = []
    secondNumArray = []
}


const calculateEquals = ()=>{
    if (opertion === '+'){
        result = firstNumber + secondNumber
        display.value = result
    }
    else if (opertion === '-'){
        result = firstNumber - secondNumber
        display.value = result

    }
    else if (opertion==='*'){
        result = firstNumber * secondNumber
        display.value = result

    }
    else if (opertion === '/'){
        result = firstNumber / secondNumber
        display.value = result

    }

}

