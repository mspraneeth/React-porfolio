
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
randomDiceImage = "dice"+randomNumber1+".png";
randomDiceImageSource="./images/"+randomDiceImage;
document.querySelector(".img1").setAttribute("src", randomDiceImageSource);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;
randomDiceImage2 = "dice"+randomNumber2+".png";
randomDiceImageSource2="./images/"+randomDiceImage2;
document.querySelector(".img2").setAttribute("src", randomDiceImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 wins!";
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}
else{
    document.querySelector("h1").textContent="Player 2 wins!🚩";
}
