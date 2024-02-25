class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide(); 
    background("Yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo();
  
    if(allContestants !== undefined){
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correctly are highlighted in green color!",130,230);
  
      for(var plr in allContestants){
        var correctAns = "2";
        var playerAnswer = allContestants[plr].answer;
  
        // Check if the player's answer matches the correct answer
        if (playerAnswer === correctAns) {
          fill("green");
        } else {
          fill("red");
        }
  
        // Display player's name and answer
        display_Answers += 30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250, display_Answers);
      }
    }
  }
}  