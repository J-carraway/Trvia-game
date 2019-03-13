var question1 = {
    name: "question1",
    question: "Who is Darth Vader's son?",
    answerChoices: ["Luke", "Goku", "Mario", "Anakin"],
    answer: "Luke",
};
var question2 = {
    name: "question2",
    question: "Who does Mario always save from Bowser?",
    answerChoices: ["Luigi", "Daisy", "Peach", "Toad"],
    answer: "Peach",
}
var question3 = {
    name: "question3",
    question: "What is Superman's weakness?",
    answerChoices: ["Girls", "Kryptonite", "Vibranium", "Reading"],
    answer: "Krypotonite",
}

var question4 = {
    name: "question4",
    question: "How mamy Star Wars movies are there?",
    answerChoices: [9, 5, 4, 8],
    answer: 9,
}


var question5 = {
    name: "question5",
    question: "What is the Buzz and Woody's owners name in Toy Story?",
    answerChoices: ["Bill", "Tom", "Andy", "Joe"],
    answer: "Andy",
}

var question6 = {
    name: "question6",
    question: "Who is not part of the Justice League?",
    answerChoices: ["Iron Man", 'Batman', "Captian Marvel aka Shazam", "Green Lantern"],
    answer: "Iron Man",
}

var questions = [question1, question2, question3, question4, question5, question6];


function trivia() {

    console.log("trivia");


    for (var i = 0; i < questions.length; i++) {

        $('input[name= ' + questions.name  + ']').val();


        //if( questions[i].answerChoices === questions[i].answer {

        //}

    }
}
    for (var i = 0; i < questions.length; i++) {

        var question = $("<p>").text(questions[i].question);

        var answers = $("<div>");

        for (var j = 0; j < questions[i].answerChoices.length; j++) {

            var answerChoice = $("<p></p>").html("<input class= 'form-check-input' type='radio' value= '" +  questions[i].answerChoices[j]    + "' name = " + questions[i].name + ">" + questions[i].answerChoices[j]);

            answers.append(answerChoice);
        }
        $("#questions").append(question, answers);

    }




 // document.getElementById("questions").innerHTML = questions;
 // document.querySelector("#questions").innerHTML = questions;

