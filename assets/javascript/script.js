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
var correctOne = answersList.answerNumber[0].answer[0];
var correctTwo = answersList.answerNumber[1].answer[1];
var correctThree = answersList.answerNumber[2].answer[2];
var correctFour = answersList.answerNumber[3].answer[1];

//initialize coutning variables
var questionCount = 0;
var userAnswer;
var number = 20;
var intervalId;

//function to change question answers
function changeQuestion() {
	for (var i = 0; i < 4; i++) {
		$("#answer" + i).html(answersList.answerNumber[questionCount].answer[i]);
	}
}

//function to run timer
function run() {
	intervalId = setInterval(decrement, 1000);
}

//function to count down
function decrement() {
	number--;
	$("#instructions").html("<h4>Guess which pokemon the silhouette belongs to before the timer runs out!</h4><h2>" + number + "</h2>");

	if (number === 0) {
		stop();
	}
}

//function to stop timer
function stop() {
    clearInterval(intervalId);
}

changeQuestion();
run();

$("#answer0").on("click", function(){
	userAnswer = answersList.answerNumber[questionCount].answer[0];
	questionCount++;
}