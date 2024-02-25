var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  // Update the quiz when the contestantCount reaches 2
  if(contestantCount === 2){
    updateQuiz();
  }

  // Update the play when the gameState is 1
  if(gameState === 1){
    clear();
    play();
  }
}

