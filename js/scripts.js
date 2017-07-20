//Business Logic
function LetsPlay (){
  this.gameDice = new Dice();
  this.player1 = new Player();
  this.player2= new Player();
function Dice(dice) {
  this.dice = 6;
}
function Player() {
  this.player = name;
  this.turn = 0;
  this.total = 0;
}
Dice.prototype.newDice = function () {
  return  Math.floor((Math.random() * this.dice) + 1)
}
Player.prototype.newRolled = function ()  {
   this.total += this.turn;
   return this.turn = 0;
}
Player.prototype.score = function (thisRoll) {
    if (thisRoll === 1) {
      alert("Turn Lost, next player");
    return this.turn = 0;
    }else {
      this.turn += thisRoll;
      if (this.total >= 100) {
        this.turn = 0;
        this.total = 0;
        alert("Winner!");
        return true;
      }
    }
  }
Player.prototype.hold = function() {
  this.total += this.turn;
  if (this.total >= 100) {
    this.total = 0;
    this.turn = 0;
    alert("Winner!");
  }
  return this.turn = 0;
  }
}
$(function(){
  //Creates a game die
  var game = new LetsPlay();
  $(".btn").click(function(){
    var dice = game.gameDice.newDice();
    game.player1.score(dice);
    $(".numberrolled").text(dice);
    $(".number1").text(game.player1.turn);
 });
  $(".stop").click(function() {
    game.player1.hold();
    $(".number1").text(game.player1.total);
  });
  $(".btn1").click(function(){
    var dice = game.gameDice.newDice();
    game.player2.score(dice);
    $(".numberrolled").text(dice);
    $(".number2").text(game.player2.turn);
  $(".stop1").click(function() {
    game.player2.hold();
    $(".number2").text(game.player2.total);
  });
  });
});
