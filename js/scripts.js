//Business Logic
function LetsPlay (){
  this.gameDice = new Dice();
  this.player1 = new Player();
  this.player2= new Player();
function Dice(dice) {
  this.dice = 6;
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
      alert("turn over");
    return this.turn = 0;
    }else {
      this.turn += thisRoll;
      this.total += thisRoll;
    }
  }
function Player() {
  this.player = 'Player:';
  this.turn = 0;
  this.total = 0;
  }
}
$(function(){
  var game = new LetsPlay();
  $(".btn").click(function(){
    var dice = game.gameDice.newDice();
    game.player1.score(dice);
    $(".numberrolled").text(dice);
    $(".number1").text(game.player1.turn);
 });
  $(".stop").click(function() {
    $(".number1").text(game.player1.total);
  });
  $(".btn1").click(function(){
    var dice = game.gameDice.newDice();
    game.player2.score(dice);
    $(".numberrolled").text(dice);
    $(".number2").text(game.player2.turn);
  $(".stop1").click(function() {
    $(".number2").text(game.player2.total);
  });
  });
});
// $(".btn1").click(function(){
//   var dice1 = game.gameDice.newDice();
//   game.player
// });

// function myFunction() {
//
// var diceRoll = Math.floor((Math.random() * 6) + 1);
//   $(".numberrolled").text(diceRoll);
//   diceRolled = playerOne.push(diceRoll);
//   var total1 = 0
//   for (var i in playerOne) {
//     if (diceRoll === 1) {
//       playerOne = [] ;
//       console.log(playerOne)
//     } else  {
//     total1 += playerOne[i]
//   }
//   }
//   $(".number1").text(total1);
// }





// $(function(){
//   var diceRoll = new Random(dice);
//   $("numberrolled").text(diceRoll.newDice());
//
// });
