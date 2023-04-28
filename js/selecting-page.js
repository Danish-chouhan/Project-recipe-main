var breakfast = document.getElementById("Breakfast")
var lunch = document.getElementById("Lunch")
var snack = document.getElementById("Snack")
var dinner = document.getElementById("Dinner")

// slecting buttons

// date and time
let date = new Date()
let options = {day : "numeric",month : "short",date :"numeric",hour :"numeric",minute:"numeric" ,hour12: true}
document.querySelector('.date-time').textContent = date.toLocaleTimeString('en-US', options);
// breakfast

function breakfastFunction() {
    if (breakfast.textContent == "Breakfast") {
        document.getElementById("Recipe").innerHTML = "<p>Breakfast-Recipe</p>"
        document.getElementById("Recipe-tourtorial").innerHTML = "<p>Breakfast Recipe-tourtorial</p>"
        document.getElementById("Products").innerHTML = "<p>Breakfast Products</p>"
    }
}

// lunch

function lunchFunction() {
    if (lunch.textContent == "Lunch") {
        document.getElementById("Recipe").innerHTML = "<p>Lunch-Recipe</p>"
        document.getElementById("Recipe-tourtorial").innerHTML = "<p>Lunch Recipe-tourtorial</p>"
        document.getElementById("Products").innerHTML = "<p>Lunch Products</p>"
    }
}

// snack

function snackFunction() {
    if (snack.textContent == "Snack") {
        document.getElementById("Recipe").innerHTML = "<p>Snack Recipe</p>"
        document.getElementById("Recipe-tourtorial").innerHTML = "<p>Snack Recipe-tourtorial</p>"
        document.getElementById("Products").innerHTML = "<p>Snack Products</p>"
    }
}

// dinner

function dinnerFunction() {
    if (dinner.textContent == "Dinner") {
        document.getElementById("Recipe").innerHTML = "<p>Dinner Recipe</p>"
        document.getElementById("Recipe-tourtorial").innerHTML = "<p>Dinner Recipe-tourtorial</p>"
        document.getElementById("Products").innerHTML = "<p>Dinner Products</p>"
    }
}

// -----------------

let centerItems1 = document.getElementById("Recipe")
let centerItems2 = document.getElementById("Recipe-tourtorial")
let centerItems3 = document.getElementById("Product").addEventListener("click", Selecting3())