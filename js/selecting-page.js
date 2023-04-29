// breakfast
var breakfast = document.getElementById("Breakfast")
breakfast.addEventListener('click',function() {
    if (breakfast.textContent == "Breakfast") {
        document.getElementById("Recipe").innerHTML = "<p>Breakfast-Recipe</p>"
        document.getElementById("Recipe-tourtorial").innerHTML = "<p>Breakfast Recipe-tourtorial</p>"
        document.getElementById("Products").innerHTML = "<p>Breakfast Products</p>"
    }
}
)
// --------------------
// Lunch
var lunch = document.getElementById("Lunch")
lunch.addEventListener('click',function() {
    if (lunch.textContent == "Lunch") {
        document.getElementById("Recipe").innerHTML = "<p>Lunch-Recipe</p>"
        document.getElementById("Recipe-tourtorial").innerHTML = "<p>Lunch Recipe-tourtorial</p>"
        document.getElementById("Products").innerHTML = "<p>Lunch Products</p>"
    }
}
)

// --------------------

// snacks
var snack = document.getElementById("Snack")
snack.addEventListener('click',function() {
    if (snack.textContent == "Snack") {
        document.getElementById("Recipe").innerHTML = "<p>Snack Recipe</p>"
        document.getElementById("Recipe-tourtorial").innerHTML = "<p>Snack Recipe-tourtorial</p>"
        document.getElementById("Products").innerHTML = "<p>Snack Products</p>"
    }
}
)

// --------------------

// dinner

var dinner = document.getElementById("Dinner")
dinner.addEventListener('click',function() {
    if (dinner.textContent == "Dinner") {
        document.getElementById("Recipe").innerHTML = "<p>Dinner Recipe</p>"
        document.getElementById("Recipe-tourtorial").innerHTML = "<p>Dinner Recipe-tourtorial</p>"
        document.getElementById("Products").innerHTML = "<p>Dinner Products</p>"
    }
}
)


// let centerItems2 = document.getElementById("Recipe-tourtorial")
// let centerItems3 = document.getElementById("Product").addEventListener("click", Selecting3())


// slecting buttons

// date and time
// let date = new Date()
// let options = { day: "numeric", month: "short", date: "numeric", hour: "numeric", minute: "numeric", hour12: true }
// document.querySelector('.date-time').textContent = date.toLocaleTimeString('en-US', options);


// -----------------

let centerItems1 = document.getElementById("Recipe")
centerItems1.addEventListener('click',function(){
    if (centerItems1.textContent == "Breakfast-Recipe") {
        document.getElementById("block1").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img1.jpg' alt=''>"
        document.getElementById("block2").innerHTML = "<h1>Poha</h1> <p>Poha is a most popular breakfast or snack recipe made with flattened rice (poha), onions, roasted peanuts, and a few spices.'</p>"
        document.getElementById("block3").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img2.jpg'>"
        document.getElementById("block4").innerHTML = "<h1>Restaurant Style Upma Recipe (Rava Upma)</h1> <p>Restaurant Style Upma Recipe (Rava Upma) is a Indian breakfast made with roastedsemolina and few spices.</p>"
        document.getElementById("block5").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img3.jpg'>"
        document.getElementById("block6").innerHTML = "<h1>Bread Upma Recipe</h1> <p>Bread Upma recipe is one of the easiest breakfast or snack that can be prepared with leftover or fresh bread in less than 15 minutes.</p>"
        document.getElementById("block7").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img4.jpg'>"
        document.getElementById("block8").innerHTML = "<h1>Moong Dal Cheela</h1> <p>Moong Dal Chilla/Cheela is a delicious protein-packed Indian breakfast recipe made from split yellow moong dal, onions, ginger, chilies, spices, and herbs.</p>"
        document.getElementById("block9").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img5.jpg'>"
        document.getElementById("block10").innerHTML = "<h1>Vermicelli Upma (Semiya Upma)</h1> <p></p>"
        document.getElementById("block11").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img6.jpeg'>"
        document.getElementById("block12").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block13").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img7.jpg'>"
        document.getElementById("block14").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block15").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img8.jpg'>"
        document.getElementById("block16").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block17").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img9.jpg'>"
        document.getElementById("block18").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block19").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img10.webp'>"
        document.getElementById("block20").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block21").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img11.jpg'>"
        document.getElementById("block22").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block23").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img12.jpg'>"
        document.getElementById("block24").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block25").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img13.jpg'>"
        document.getElementById("block26").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block27").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img14.jpg'>"
        document.getElementById("block28").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block29").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img15.png'>"
        document.getElementById("block30").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
    }
    if (centerItems1.textContent == "Lunch-Recipe") {
        document.getElementById("block1").innerHTML = "<img src='../img/Selecting-page/lunch-img/img1.webp' alt=''>"
        document.getElementById("block2").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block3").innerHTML = "<img src='../img/Selecting-page/lunch-img/img2.jpg' alt=''>"
        document.getElementById("block4").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block5").innerHTML = "<img src='../img/Selecting-page/lunch-img/img3.jpg' alt=''>"
        document.getElementById("block6").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block7").innerHTML = "<img src='../img/Selecting-page/lunch-img/img4.jpg' alt=''>"
        document.getElementById("block8").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block9").innerHTML = "<img src='../img/Selecting-page/lunch-img/img5.jpg' alt=''>"
        document.getElementById("block10").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block11").innerHTML = "<img src='../img/Selecting-page/lunch-img/img6.jpg' alt=''>"
        document.getElementById("block12").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block13").innerHTML = "<img src='../img/Selecting-page/lunch-img/img7.jpg' alt=''>"
        document.getElementById("block14").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block15").innerHTML = "<img src='../img/Selecting-page/lunch-img/img8.jpg' alt=''>"
        document.getElementById("block16").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block17").innerHTML = "<img src='../img/Selecting-page/lunch-img/img9.jpg' alt=''>"
        document.getElementById("block18").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block19").innerHTML = "<img src='../img/Selecting-page/lunch-img/img10.jpeg' alt=''>"
        document.getElementById("block20").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block21").innerHTML = "<img src='../img/Selecting-page/lunch-img/img11.jpg' alt=''>"
        document.getElementById("block22").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block23").innerHTML = "<img src='../img/Selecting-page/lunch-img/img12.jpg' alt=''>"
        document.getElementById("block24").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block25").innerHTML = "<img src='../img/Selecting-page/lunch-img/img13.jpg' alt=''>"
        document.getElementById("block26").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block27").innerHTML = "<img src='../img/Selecting-page/lunch-img/img14.jpg' alt=''>"
        document.getElementById("block28").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block29").innerHTML = "<img src='../img/Selecting-page/lunch-img/img15.jpg' alt=''>"
        document.getElementById("block30").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
    }
    if (centerItems1.textContent == "Snack Recipe") {
        document.getElementById("block1").innerHTML = " <img src='../img/Selecting-page/snacks-img/img1.jpg' alt=''>"
        document.getElementById("block2").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block3").innerHTML = " <img src='../img/Selecting-page/snacks-img/img2.jpg' alt=''>"
        document.getElementById("block4").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block5").innerHTML = " <img src='../img/Selecting-page/snacks-img/img3.webp' alt=''>"
        document.getElementById("block6").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block7").innerHTML = " <img src='../img/Selecting-page/snacks-img/img4.jpg' alt=''>"
        document.getElementById("block8").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block9").innerHTML = " <img src='../img/Selecting-page/snacks-img/img5.jpeg' alt=''>"
        document.getElementById("block10").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block11").innerHTML = " <img src='../img/Selecting-page/snacks-img/img6.jpeg' alt=''>"
        document.getElementById("block12").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block13").innerHTML = " <img src='../img/Selecting-page/snacks-img/img7.JPG' alt=''>"
        document.getElementById("block14").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block15").innerHTML = " <img src='../img/Selecting-page/snacks-img/img8.jpeg' alt=''>"
        document.getElementById("block16").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block17").innerHTML = " <img src='../img/Selecting-page/snacks-img/img9.jpg' alt=''>"
        document.getElementById("block18").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block19").innerHTML = " <img src='../img/Selecting-page/snacks-img/img10.jpeg' alt=''>"
        document.getElementById("block20").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block21").innerHTML = " <img src='../img/Selecting-page/snacks-img/img11.webp' alt=''>"
        document.getElementById("block22").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block23").innerHTML = " <img src='../img/Selecting-page/snacks-img/img12.jpg' alt=''>"
        document.getElementById("block24").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block25").innerHTML = " <img src='../img/Selecting-page/snacks-img/img13.jpg' alt=''>"
        document.getElementById("block26").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block27").innerHTML = " <img src='../img/Selecting-page/snacks-img/img14.jpg' alt=''>"
        document.getElementById("block28").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block29").innerHTML = " <img src='../img/Selecting-page/snacks-img/img15.webp' alt=''>"
        document.getElementById("block30").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
    }
    if (centerItems1.textContent == "Dinner Recipe") {
        document.getElementById("block1").innerHTML = "<img src='../img/Selecting-page/dinner-img/img1.jpeg' alt=''>"
        document.getElementById("block2").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block3").innerHTML = "<img src='../img/Selecting-page/dinner-img/img2.jpg' alt=''>"
        document.getElementById("block4").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block5").innerHTML = "<img src='../img/Selecting-page/dinner-img/img3.jpeg' alt=''>"
        document.getElementById("block6").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block7").innerHTML = "<img src='../img/Selecting-page/dinner-img/img4.jpeg' alt=''>"
        document.getElementById("block8").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block9").innerHTML = "<img src='../img/Selecting-page/dinner-img/img5.webp' alt=''>"
        document.getElementById("block10").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block11").innerHTML = "<img src='../img/Selecting-page/dinner-img/img6.webp' alt=''>"
        document.getElementById("block12").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block13").innerHTML = "<img src='../img/Selecting-page/dinner-img/img7.jpg' alt=''>"
        document.getElementById("block14").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block15").innerHTML = "<img src='../img/Selecting-page/dinner-img/img8.jpeg' alt=''>"
        document.getElementById("block16").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block17").innerHTML = "<img src='../img/Selecting-page/dinner-img/img9.jpeg' alt=''>"
        document.getElementById("block18").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block19").innerHTML = "<img src='../img/Selecting-page/dinner-img/img10.jpg' alt=''>"
        document.getElementById("block20").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block21").innerHTML = "<img src='../img/Selecting-page/dinner-img/img11.jpg' alt=''>"
        document.getElementById("block22").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block23").innerHTML = "<img src='../img/Selecting-page/dinner-img/img12.jpg' alt=''>"
        document.getElementById("block24").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block25").innerHTML = "<img src='../img/Selecting-page/dinner-img/img13.jpg' alt=''>"
        document.getElementById("block26").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block27").innerHTML = "<img src='../img/Selecting-page/dinner-img/img14.jpg' alt=''>"
        document.getElementById("block28").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block29").innerHTML = "<img src='../img/Selecting-page/dinner-img/img15.jpg' alt=''>"
        document.getElementById("block30").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
    }

})

const person = {
    name : 'Danish',
    age : 19,
};
console.log(sessionStorage.setItem('person',JSON.stringify(person)));