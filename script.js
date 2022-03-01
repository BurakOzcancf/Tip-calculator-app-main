let bill = document.getElementById("bill")
let buttons = Array.from(document.querySelectorAll("[data-percent]"))
let input = document.querySelector("[data-percent-input]")
let people = document.getElementById("people")
let tip = document.querySelector("[data-tip]")
let total = document.querySelector("[data-total]")    
let reset = document.querySelector("[data-reset]")

let percent = 0

//Error Messeges
let peopleError = document.getElementById("people__error")
let percentError = document.getElementById("percent__error")
let billError = document.getElementById("bill__error")

// Test for the errors
function errors() {
    if (bill.value <= 0) {
        bill.value=0
    }
    if (input.value < 0) {
        input.value=0
    }
    if (people.value < 0) {
        people.value=0
    }
    if (tip.innerHTML == 0.00 && total.innerHTML == 0.00 && people.value != 0 && bill.value==0) {
        billError.style.visibility= "visible"
    }
    if (bill.value != 0) {
        billError.style.visibility= "hidden"
    }
    if (tip.innerHTML == 0 && total.innerHTML != 0) {
        percentError.style.visibility= "visible"
    }
    if (tip.innerHTML != 0) {
        percentError.style.visibility= "hidden"
    }
    if ((people.value == 0 && bill.value != 0 && input.value != 0) ||
        (people.value == 0 && bill.value != 0 && percent != 0)) {
        peopleError.style.visibility="visible"
    }
    if (people.value != 0) {
        peopleError.style.visibility="hidden"
    }
    if (tip.innerHTML == 0 && total.innerHTML == 0) {
        tip.innerHTML = "0.00"
        total.innerHTML = "0.00"
        console.log("hekk")
    }
    if (tip.innerHTML == "NaN" || tip.innerHTML == "undefined" || tip.innerHTML === "Infinity"
        || tip.innerHTML < 0 || total.innerHTML == "NaN" || total.innerHTML == "undefined"
        || total.innerHTML == "Infinity" || total.innerHTML < 0) {
        tip.innerHTML = 0
        total.innerHTML = 0
    }
    if(tip.innerHTML != 0 && total.innerHTML != 0) {
        reset.disabled = false     
        reset.style.background = "hsl(172, 67%, 45%)"
    }
    
    if (tip.innerHTML == 0 && total.innerHTML == 0) {
        reset.disabled = true
        reset.style.background = "hsl(186, 14%, 43%)"
    }
}

// Calculations
buttons.map(button => {
    button.addEventListener("click", () => {
        percent = parseInt(button.value)
        tip.innerHTML = ((bill.value * (button.value / 100)) / people.value).toFixed(2)
        total.innerHTML = (bill.value / people.value + (bill.value * (button.value / 100)) / people.value).toFixed(2)
        errors()
    })    
})
input.addEventListener("change", () => {
    percent = parseInt(input.value)
    tip.innerHTML = ((bill.value * (input.value / 100)) / people.value).toFixed(2)
    total.innerHTML = (bill.value / people.value + (bill.value * (input.value / 100)) / people.value).toFixed(2)
    errors()
})

people.addEventListener("change", () => {
    tip.innerHTML = ((bill.value * (percent / 100)) / people.value).toFixed(2)
    total.innerHTML = (bill.value / people.value + (bill.value * (percent / 100)) / people.value).toFixed(2)
    errors()
})
bill.addEventListener("change", () => {
    tip.innerHTML = ((bill.value * (percent / 100)) / people.value).toFixed(2)
    total.innerHTML = (bill.value / people.value + (bill.value * (percent / 100)) / people.value).toFixed(2)
    errors()
})

// Reset button
reset.addEventListener("click", () => {
        bill.value = 0
        input.value = 0
        people.value = 0
        tip.innerHTML = "0.00"
        total.innerHTML = "0.00"
        billError.style.visibility = "hidden"
        percentError.style.visibility = "hidden"
        peopleError.style.visibility = "hidden"
})
