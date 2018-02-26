console.log("up and running");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = "queen";
var cardTwo = "king";

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped" +" "+ cardsInPlay);

if (cardsInPlay.length === 2) {
	alert("You found a match!");
}
else{
	alert("Sorry try again.");
}