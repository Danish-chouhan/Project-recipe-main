// breakfast
var breakfast = document.getElementById("Breakfast")
const btn = document.querySelector('.btn')
btn.addEventListener('click',()=> {
    window.open('/html/search-recipe.html','_blank')
})


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
        document.getElementById("block10").innerHTML = "<h1>Vermicelli Upma (Semiya Upma)</h1> <p>Vermicelli/Semiya Upma is a traditional and popular South Indian breakfast made with vermicelli and vegetables.</p>"
        document.getElementById("block11").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img6.jpeg'>"
        document.getElementById("block12").innerHTML = "<h1>Soft Idli Recipe - (Recipe from Dassana's Veg Recipes)</h1> <p>Idli is one of the most healthiest and popular South Indian breakfast dish. These are soft, light, fluffy steamed round cake made with a ground, fermented rice and lentil batter.</p>"
        document.getElementById("block13").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img7.jpg'>"
        document.getElementById("block14").innerHTML = "<h1>Sabudana Khichdi Recipe</h1> <p>Sabudana Khichdi is a delicious and nutritious recipe cooked with Tapioca pearls/Sago, potatoes, roasted peanuts especially during the fasting season of Navratri or Maha Shivaratri in India</p>"
        document.getElementById("block15").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img8.jpg'>"
        document.getElementById("block16").innerHTML = "<h1>How to Make Poori</h1> <p>Learn how to make perfect Poori (Puri), a popular Indian fried bread that is puffy, crispy, and delicious. It is typically served for breakfast or as a snack.</p>"
        document.getElementById("block17").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img9.jpg'>"
        document.getElementById("block18").innerHTML = "<h1>Masala Dosa - (Recipe from Hebbars Kitchen)</h1> <p>Masala Dosa Recipe is an easy and popular, tasty south indian staple breakfast recipe made with rice and urad dal.</p>"
        document.getElementById("block19").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img10.webp'>"
        document.getElementById("block20").innerHTML = "<h1>Indian Masala Oats (Savory Oatmeal)</h1> <p>Masala Oats is a mildly spiced Indian Style savory oatmeal breakfast porridge recipe prepared with mixed vegetables and Indian spices</p>"
        document.getElementById("block21").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img11.jpg'>"
        document.getElementById("block22").innerHTML = "<h1>Ven Pongal Recipe (Khara Pongal)</h1> <p>Ven Pongal also known as Khara Pongal is a classic South Indian breakfast dish made with rice & yellow moong lentils in Instant Pot and Stovetop pressure cooker</p>"
        document.getElementById("block23").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img12.jpg'>"
        document.getElementById("block24").innerHTML = "<h1>Karnataka Style Mandakki Usli Recipe (Puffed Rice Upma)</h1> <p>Mandakki Usli Recipe (puffed rice upma) is a simple Karnataka style breakfast made with soaked puffed rice, onions, groundnuts and curry leaves and is typically relished along with Mirchi bajji and chai.</p>"
        document.getElementById("block25").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img13.jpg'>"
        document.getElementById("block26").innerHTML = "<h1>Besan Chilla (Savory Gram Flour Pancakes)</h1> <p>Besan Chilla or Besan Cheela is an easy and healthy Indian savory pancake recipe made from besan (gram flour), onion, tomato, spices, and herbs.</p>"
        document.getElementById("block27").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img14.jpg'>"
        document.getElementById("block28").innerHTML = "<h1>Rava Dhokla</h1> <p>Rava Dhokla (Suji Dhokla) is a soft, fluffy, steamed savory cake made from semolina (sooji), yogurt, spices, fruit salt like eno, and a tempering of mustard seeds, green chilies, curry leaves, and white sesame seeds.</p>"
        document.getElementById("block29").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img15.png'>"
        document.getElementById("block30").innerHTML = "<h1>Instant Pot Mumbai Pav Bhaji</h1> <p>Pav Bhaji is a popular dish from Mumbai made up of spiced mashed vegetable curry (bhaji), served piping hot with a soft bread roll (pav) with a butter,finely chopped onions, cilantro and a squeeze of lime</p>"
    }
    if (centerItems1.textContent == "Lunch-Recipe") {
        document.getElementById("block1").innerHTML = "<img src='../img/Selecting-page/lunch-img/img1.webp' alt=''>"
        document.getElementById("block2").innerHTML = "<h1>Masala Bhindi</h1><p>A delicious dish made with freshly bought okra. Grab some mustard oil, cumin seeds, fennel seeds, finely-chopped onions, ginger and a pinch of amchoor. We promise you'll make this recipe a regular affair in your weekly menu.</p>"
        document.getElementById("block3").innerHTML = "<img src='../img/Selecting-page/lunch-img/img2.jpg' alt=''>"
        document.getElementById("block4").innerHTML = "<h1>Chana Kulcha</h1> <p>A classic dish that never goes out of style. The quintessential chana kulcha  needs only a few ingredients - cumin powder, ginger, coriander powder, carom powder and some mango powder, which is what gives the chana it's sour and tangy taste.  </p>"
        document.getElementById("block5").innerHTML = "<img src='../img/Selecting-page/lunch-img/img3.jpg' alt=''>"
        document.getElementById("block6").innerHTML = "<h1>Shahi Egg Curry</h1> <p>Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it</p>"
        document.getElementById("block7").innerHTML = "<img src='../img/Selecting-page/lunch-img/img4.jpg' alt=''>"
        document.getElementById("block8").innerHTML = "<h1>Gujarati Kadhi</h1> <p>A staple in almost every household, Gujarati kadhi is a lovely curry which is simple, light and it's very easy to make. A lovely Gujarati-style kadhi made with yogurt, gram flour, curry leaves and ginger, this one has sweet undertones. This cooling curry is great to escape the heat.</p>"
        document.getElementById("block9").innerHTML = "<img src='../img/Selecting-page/lunch-img/img5.jpg' alt=''>"
        document.getElementById("block10").innerHTML = "<h1>Allahabad Ki Tehri</h1> <p>Also known as vegetable pulao, this one pot rice meal is unique to the rich state of Uttar Pradesh. It's aromatic, made with a lot of bright vegetables, fiery masalas and topped with desi ghee. Cook for lunch accompanied with curd.</p>"
        document.getElementById("block11").innerHTML = "<img src='../img/Selecting-page/lunch-img/img6.jpg' alt=''>"
        document.getElementById("block12").innerHTML = "<h1>Low Fat Dahi Chicken</h1> <p>A low-fat chicken curry made with marinated pieces of chicken, turmeric, red chilli, garlic paste, green chilli, tomatoes and fresh coriander. A perfect chicken recipe to cook for lunch, pair with rice or chapati. Relish your favourite chicken, guilt-free! </p>"
        document.getElementById("block13").innerHTML = "<img src='../img/Selecting-page/lunch-img/img7.jpg' alt=''>"
        document.getElementById("block14").innerHTML = "<h1>Kolhapuri Vegetables</h1> <p>A vegetarian dish with its root in Maharashtra, Kohlapuri vegetables are made with a string of glorious vegetables, ginger-garlic paste, grated onion, cinnamon, cloves and a lot of coconut.</p>"
        document.getElementById("block15").innerHTML = "<img src='../img/Selecting-page/lunch-img/img8.jpg' alt=''>"
        document.getElementById("block16").innerHTML = "<h1>Black Channa and Coconut Stew</h1> <p>A light stew which brings together delicate vegetables like zucchini, eggplant, bottle gourd and black channa, is one you should be having. Especially if you're looking for a healthy quick fix.</p>"
        document.getElementById("block17").innerHTML = "<img src='../img/Selecting-page/lunch-img/img9.jpg' alt=''>"
        document.getElementById("block18").innerHTML = "<h1>Urlai Roast</h1> <p>Oh, this one's a real delight! Perfectly boiled baby potatoes cooked in a peppery Chettinad masala, onions and tomatoes.</p>"
        document.getElementById("block19").innerHTML = "<img src='../img/Selecting-page/lunch-img/img10.jpeg' alt=''>"
        document.getElementById("block20").innerHTML = "<h1>Paneer Achaari</h1> <p>Don't get intimidated by the list of ingredients because not only are already in your kitchen cabinet, but also because all they'll need is 20 minutes of your time. Chunks of cottage cheese cooked in some exciting spices, yogurt and a pinch of sugar.</p>"
        document.getElementById("block21").innerHTML = "<img src='../img/Selecting-page/lunch-img/img11.jpg' alt=''>"
        document.getElementById("block22").innerHTML = "<h1>Dal Makhani</h1> <p>A Punjabi staple, Dal Makhani is a quintessential Indian dish with many variations found in different regions of our country as well as abroad. A luscious, creamy dal recipe loaded with butter, this can be served with naan or paratha or accompany with some cooked rice. YOU can prepare this for lunch or cook for dinner parties as well.</p>"
        document.getElementById("block23").innerHTML = "<img src='../img/Selecting-page/lunch-img/img12.jpg' alt=''>"
        document.getElementById("block24").innerHTML = "<h1>Punjabi Dal Tadka</h1> <p>This Punjabi dal tadka is a mouth-watering dish served with roti, naan or rice. Any north Indian menu is incomplete without this tadka dal.</p>"
        document.getElementById("block25").innerHTML = "<img src='../img/Selecting-page/lunch-img/img13.jpg' alt=''>"
        document.getElementById("block26").innerHTML = "<h1>Kashmiri Rajma</h1> <p>Rajma is a popular Indian curry made with kidney beans. This recipe is made with aroma of Kashmiri garam masala and a host of other spices.</p>"
        document.getElementById("block27").innerHTML = "<img src='../img/Selecting-page/lunch-img/img14.jpg' alt=''>"
        document.getElementById("block28").innerHTML = "<h1>Paneer Tamatar Ki Subzi</h1> <p>Paneer cooked in a tomato gravy along with spices. This can be your easy and quick go-to recipe for lunch or even dinner.</p>"
        document.getElementById("block29").innerHTML = "<img src='../img/Selecting-page/lunch-img/img15.jpg' alt=''>"
        document.getElementById("block30").innerHTML = "<h1>Paneer Kofta</h1> <p>This paneer kofta is stuffed with aromatic goodness of raisins and khoya along with various spices, deep fried and simmering hot in a creamy gravy.</p>"
    }
    if (centerItems1.textContent == "Snack Recipe") {
        document.getElementById("block1").innerHTML = " <img src='../img/Selecting-page/snacks-img/img1.jpg' alt=''>"
        document.getElementById("block2").innerHTML = "<h1>Strawberry-Chocolate Greek Yogurt Bark Recipe</h1> <p>Lightly sweetened Greek yogurt gets studded with fresh strawberries and chocolate chips then frozen so you can break it into chunks just like chocolate bark (but healthier!).</p>"
        document.getElementById("block3").innerHTML = " <img src='../img/Selecting-page/snacks-img/img2.jpg' alt=''>"
        document.getElementById("block4").innerHTML = "<h1>Tahini Cookies with Pistachios</h1> <p>The perfect sweet and savory snacking cookie.</p>"
        document.getElementById("block5").innerHTML = " <img src='../img/Selecting-page/snacks-img/img3.webp' alt=''>"
        document.getElementById("block6").innerHTML = "<h1>Classic Onion Dip</h1> <p>It’s just like the junky stuff you buy in the tub, but of course, not junky at all.</p>"
        document.getElementById("block7").innerHTML = " <img src='../img/Selecting-page/snacks-img/img4.jpg' alt=''>"
        document.getElementById("block8").innerHTML = "<h1>Apple & Brie Crostini with Hot Honey</h1> <p>You’ll only need a handful of ingredients to make these delicious, easy apple and brie crostini. Plus they only take about 15 minutes to throw together!</p>"
        document.getElementById("block9").innerHTML = " <img src='../img/Selecting-page/snacks-img/img5.jpeg' alt=''>"
        document.getElementById("block10").innerHTML = "<h1>How To Make Crispy Roasted Chickpeas in the Oven</h1> <p>So tiny. So easy to eat by the handful. So irresistible.</p>"
        document.getElementById("block11").innerHTML = " <img src='../img/Selecting-page/snacks-img/img6.jpeg' alt=''>"
        document.getElementById("block12").innerHTML = "<h1>How to Make a Cheese Plate for Just Yourself—and Why That's a Really, Really Good Idea</h1> <p>Be alone. Be fancy. Have cheese.</p>"
        document.getElementById("block13").innerHTML = " <img src='../img/Selecting-page/snacks-img/img7.JPG' alt=''>"
        document.getElementById("block14").innerHTML = "<h1>Chicken Spring Rolls With Peanut Sauce</h1> <p>These chicken spring rolls are stuffed with juicy chicken, crisp vegetables, and light tender rice noodles. They are great snacks to eat after a workout as well, because they contain the right amounts of protein, carbs, and fats.</p>"
        document.getElementById("block15").innerHTML = " <img src='../img/Selecting-page/snacks-img/img8.jpeg' alt=''>"
        document.getElementById("block16").innerHTML = "<h1>The Best Mango Smoothie</h1> <p>This delicious mango smoothie recipe is filled with juicy mango, banana, tropical pineapple juice, and healthy fats thanks to Greek yogurt.</p>"
        document.getElementById("block17").innerHTML = " <img src='../img/Selecting-page/snacks-img/img9.jpg' alt=''>"
        document.getElementById("block18").innerHTML = "<h1>Vegan Mushroom (Jerky)</h1> <p>These portobello mushroom slices, which are cooked at low oven temperatures until they dry out slightly and intensify in flavor, are a very good, very creative spin on the idea of jerky.</p>"
        document.getElementById("block19").innerHTML = " <img src='../img/Selecting-page/snacks-img/img10.jpeg' alt=''>"
        document.getElementById("block20").innerHTML = "<h1>Healthy Zucchini Muffins</h1> <p>They're made with white whole wheat flour, naturally-sweetened, deliciously spiced with cinnamon, easy to freeze, and — even though you won’t taste it — they are chocked full of fresh shredded zucchini.</p>"
        document.getElementById("block21").innerHTML = " <img src='../img/Selecting-page/snacks-img/img11.webp' alt=''>"
        document.getElementById("block22").innerHTML = "<h1>Kolar Pitha</h1><p>Sticky Bangladeshi banana fritters sweetened with maple.</p>"
        document.getElementById("block23").innerHTML = " <img src='../img/Selecting-page/snacks-img/img12.jpg' alt=''>"
        document.getElementById("block24").innerHTML = "<h1>Healthy 5-Ingredient Granola Bars</h1> <p>Just 5 ingredients, no baking involved.</p>"
        document.getElementById("block25").innerHTML = " <img src='../img/Selecting-page/snacks-img/img13.jpg' alt=''>"
        document.getElementById("block26").innerHTML = "<h1>Grown-Up Ants on a Log</h1> <p>These Grown Up Ants on a Log are a unique hors d'ouerves, filled with a spiced goat cheese mixture, and topped with pecans and dried cherries.</p>"
        document.getElementById("block27").innerHTML = " <img src='../img/Selecting-page/snacks-img/img14.jpg' alt=''>"
        document.getElementById("block28").innerHTML = "<h1>Nutella Popcorn</h1> <p>What's really cool about this recipe is that you can do this with peanut butter, almond butter, cashew butter, even cookie butter! The sky is the limit, and oh my goodness, this is fun to make.</p>"
        document.getElementById("block29").innerHTML = " <img src='../img/Selecting-page/snacks-img/img15.webp' alt=''>"
        document.getElementById("block30").innerHTML = "<h1>Soft Pretzels</h1> <p>The recipe here produces perfectly chewy pretzels with dark, burnished exteriors.</p>"
    }
    if (centerItems1.textContent == "Dinner Recipe") {
        document.getElementById("block1").innerHTML = "<img src='../img/Selecting-page/dinner-img/img1.jpeg' alt=''>"
        document.getElementById("block2").innerHTML = "<h1>Tofu Curry </h1> <p>This topu currey is vegan,gluten-free and protein packed this is one of those dishes made in a restaurant style but without the use of butter/ghee or creem</p>"
        document.getElementById("block3").innerHTML = "<img src='../img/Selecting-page/dinner-img/img2.jpg' alt=''>"
        document.getElementById("block4").innerHTML = "<h1>kadhi Recipe</h1> <p>Also Known as kadhi pakora is a delicius dish of crisp freid pakoras in a favorsome yogurt sauce if you do not want to make the pakoras you can simply server the kadhi with stir fried  veggies or leaf greens</p>"
        document.getElementById("block5").innerHTML = "<img src='../img/Selecting-page/dinner-img/img3.jpeg' alt=''>"
        document.getElementById("block6").innerHTML = "<h1>Bombay pottoes</h1> <p>nskjnxjnskn</p>"
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