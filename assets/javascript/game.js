//Global variables 
var crystal = {
	red:
	{
		name: "red",
		value:0
	},
	green:
	{
		name: "green",
		value:0
	},
	purple:
	{
		name: "purple",
		value:0
	},
	white:
	{
		name: "white",
		value:0
	},
}

//Scores 
var targetScore = 0;
var userScore = 0; 

//wins and losses
var winCount = 0;
var lossCount = 0; 
//Funtions

//Helper function to get random numbers
var getRandom = function (min, max){
	return Math.floor(Math.random() * (max - min +1)) +min;
}

//Starts and restarts the game
var startGame = function(){
	//reset the Current Score 

	userScore = 0; 
	//Set a new Target Score

	targetScore = getRandom(24, 139);
	//Set different values for each of the crystals (between 1 and 17)
	crystal.red.value = getRandom(1,17);
	crystal.green.value = getRandom(1,17);
	crystal.purple.value = getRandom(1,17);
	crystal.white.value = getRandom(1,17);
	//Change the HTML to reflect all of these changes
	$("#userScore").html(userScore);
	$("#targetScore").html(targetScore);

	//Testing console
	console.log()
	console.log("Target Score: " + targetScore);
	console.log("Red: " + crystal.red.value + " | Green: " + crystal.green.value + " | Purple: " + crystal.purple.value + " | White: " + crystal.white.value);
	console.log()
}

//Respond to clicks on the crystals
var addValues = function(crystal){

//change user Score
	userScore = userScore + crystal.value;

//change the HTML to reflect changes in current Score
$("#userScore").html(userScore);

//Call the checkWin function
checkWin();

//testing Complete
console.log("Your Score: " + userScore);
}

//check if the user Won or Lost and reset the Game
var checkWin = function(){

	//check if currentScore is larger than targetScore
	if(userScore > targetScore){
		alert("sorry boo boo");
		console.log("you lost");

		//add to loss counter
		lossCount++;

		//change loss count HTML
		$("#lossCount").html(lossCount);

		//restart the game
		startGame();
	}
	else if (userScore == targetScore){
		alert("winner!");
		console.log("winner!");

		//add to the win counter
		winCount++;

		//change win count HTML
		$("#winCount").html(winCount);

		//restart the game
		startGame();
}
}

//Main Process

//Start game
startGame();

$("#red").click(function() {
	addValues(crystal.red);
	
});
$("#green").click(function() {
	addValues(crystal.green);
});
$("#purple").click(function() {
	addValues(crystal.purple);
});
$("#white").click(function() {
	addValues(crystal.white);
});