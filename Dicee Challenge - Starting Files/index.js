var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomimage = "dice" + randomnumber1 + ".png";
var randomimagesource = "images/" + randomimage;

document.querySelectorAll("img")[0].setAttribute("src", randomimagesource);

var randomimage2 = "dice" + randomnumber2 + ".png";
var randomimage2source = "images/" + randomimage2;

document.querySelectorAll("img")[1].setAttribute("src", randomimage2source);  

if (randomnumber1 === randomnumber2){
    document.querySelector("h1").innerHTML = "Draw";
}
else if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if (randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
