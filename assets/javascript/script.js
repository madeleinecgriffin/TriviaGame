//object containg array of question answers
var answersList = {
	answerNumber: [{
		answer: [
		"Pikachu", "Mimikyu", "Pichu", "Ditto"
		]
	}, {
		answer: [
		"Vulpix", "Eevee", "Jigglypuff", "Growlithe"
		]
	}, {
		answer: [
		"Gengar", "Charizard", "Snorlax", "Dragonite"
		]
	}, {
		answer: [
		"Goldeen", "Magikarp", "Krabby", "Ditto"
		]
	}]
};

//recording the correct answer to each question
var answerArray = [answersList.answerNumber[0].answer[0], answersList.answerNumber[1].answer[1], answersList.answerNumber[2].answer[2], answersList.answerNumber[3].answer[1]];

//initialize counting variables
//variable to store number of questions completed
var questionCount = 0;
//variable to store the user's answer
var userAnswer;
//variable to store the timer counting down
var number;
//variable to run timer function
var intervalId;
//variable to determine if page currently displayed is a question or answer page
var questionPage = true;
//variable to store text alerting user if they are right or wrong
var guessText;
//temp variable
var temp;
//variable to store id of button clicked
var id;
//varaible to store the number of correct answers guessed
var correct = 0;

//initializing images array
var shadowImages = ["assets/images/pikachu.png","assets/images/eevee.png","assets/images/snorlax.png","assets/images/magikarp.png"];
var colorImages = ["assets/images/pikachu2.png","assets/images/eevee2.png","assets/images/snorlax2.png","assets/images/magikarp2.png"];

//function to change question answers and reset timer for new question
function changeQuestion() {
	number = 15;
	questionPage = true;
	$("#pokemonImage").attr("src", shadowImages[questionCount]);
	$("#instructions").html("Guess which pokemon the silhouette belongs to before the timer runs out!");
	for (var i = 0; i < 4; i++) {
		$("#answer" + i).html(answersList.answerNumber[questionCount].answer[i]);
	}
}

//function clear question answers and reset timer for answer screen
function clearQuestion() {
	number = 5;
	questionPage = false;
	temp = answerArray[questionCount];
	questionCount++;
	$("#pokemonImage").attr("src", colorImages[questionCount - 1]);
	$("#instructions").html(guessText + " The pokemon is " + temp + ". The next question will appear when the timer runs out.");
	for (var i = 0; i < 4; i++) {
		$("#answer" + i).html("");
	}
}

//function to show finished quiz screen
function finish() {
	$("#instructions").html("Congrats! You finished the Pokemon quiz. You correctly named " + correct + " pokemon.");
	$("#countdown").html("");
	$("#pokemonImage").attr("src", "assets/images/complete.png");
	$("#pokemonImage").attr("width", "300px");
	$("#pokemonImage").attr("height", "250px");
	return;
}

//function to run timer
function run() {
	intervalId = setInterval(decrement, 1000);
}

//function to count down
function decrement() {
	
	//runs if the display is currently a question screen
	if (questionPage == true && number <= 0) {
			guessText = "Time's up!";
			clearQuestion();
	}

	//runs if display is currently an answer screen
	if (questionPage == false && number <= 0) {

		//runs if quiz is over
		if (questionCount == answerArray.length) {
			finish();
			return;
		}

		//runs once timer runs out on the answer screen
		else {
			changeQuestion();	
		}
	}

	//displays timer counting down
	number--;
	$("#countdown").html("<h2>" + number + "</h2>");
}

//starting the quiz
changeQuestion();
$("#countdown").html("<h2>" + number + "</h2>");

//starting the countdown
run();

//runs when user selects one of the four answers
$(".answer").on("click", function(){

	//stores id of button clicked
	id = $(this).attr("id");

	//sets user answer to index of id of button clicked
	if (id == "answer0") {
		userAnswer = answersList.answerNumber[questionCount].answer[0];
	}
	else if (id == "answer1") {
		userAnswer = answersList.answerNumber[questionCount].answer[1];
	}

	else if (id == "answer2") {
		userAnswer = answersList.answerNumber[questionCount].answer[2];
	}

	else if (id == "answer3") {
		userAnswer = answersList.answerNumber[questionCount].answer[3];
	}
	
	//determines if user guessed correctly
	if (userAnswer == answerArray[questionCount]) {
		guessText = "Correct!";
		correct++;
	}
	else {
		guessText = "Incorrect.";
	}

	clearQuestion();
})