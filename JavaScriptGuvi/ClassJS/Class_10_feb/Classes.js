class Over {

constructor(wickets,score,balls =6) {
this.score = score;
this.wickets = wickets;
this.balls = balls;
}//end of constructor

}//end of Over Class



class Player {

setPlayerDetails(){
  var name = prompt("Name");
  this.name = name;
}//end of setPlayerDetails function

storePlayerScore(){
  var playerScore = prompt("score");
  var ballsPlayed = prompt("balls");
  this.playerScore = playerScore;
  this.ballsPlayed=ballsPlayed;
}//end of storePlayerScore

displayPlayerScoreDetails(){
  var playerObject = {
    name:this.name,
    score:this.playerScore,
    balls:this.ballsPlayed
  }//end of Object
  return playerObject;
}// end of displayPlayerScoreDetails function

}//end of Player Class


class Team {

constructor(teamName) {
this.teamName=teamName;
}// end of Team Constructor

static randomScore(){
return Math.floor(Math.random()*7);
}//end of randomScore()

createPlayer(){
  var i =0;
  var p=[];
  for(i=0;i<10;i++){
  p[i]=new Player();
  p[i].setPlayerDetails();
}
return p;
}//end of callPlayer()

teamScore() {
  var playerCount =0;
  for(playerCount=0;playerCount<10;playerCount++){
  var PO[i] =p[1].displayPlayerScoreDetails();
}
return PO;
}//end of teamScore()

}//end of Team Class


var Team1=new Team("India");
var p = Team1.createPlayer();


p[1].storePlayerScore();
var PO = Team1.teamScore();
console.log(PO);