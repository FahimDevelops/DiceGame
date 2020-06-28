
//--------------------------RANDOMIZE DICE SELECTION----------------------------

//RANDOMIZING DICE 1

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage= "dice" + randomNumber1 + ".png";

var randomImageSource= "images/" + randomDiceImage;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

// RANDOMIZING DICE 2

var randomNumber2= Math.floor(Math.random()*6)+1;

var randomImageSource2= "images/dice" + randomNumber2 +".png";

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);


// ------------------------WINNER SELECTION-------------------------------------

//IF PLAYER ONE WINS

if(randomNumber1>randomNumber2){

document.querySelector("h1").innerHTML="🚩Play 1 Wins!";

}

//IF PLAYER TWO WINS


else if(randomNumber1<randomNumber2){

document.querySelector("h1").innerHTML="🚩Play 2 Wins!";

}

//IF ITS A DRAW

else{

document.querySelector("h1").innerHTML="⭐️ITS A DRAW!"

}
