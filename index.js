// player1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
var player1dice = "./images/dice"+randomNumber1+".png";
console.log(player1dice);
document.querySelector(".img1").setAttribute("src",player1dice);
// player2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;
var player2dice = "./images/dice"+randomNumber2+".png";
console.log(player2dice);
document.querySelector(".img2").setAttribute("src",player2dice);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else if(randomNumber1 == randomNumber2)
{
    document.querySelector("h1").innerHTML = "Draw!"
}