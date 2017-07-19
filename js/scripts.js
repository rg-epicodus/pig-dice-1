//Business Logic
function LetsPlay (){
  this.gameDice = new Dice();
  this.player1 = new Player1();

function Dice(dice) {
  this.dice = 6;
}
Dice.prototype.newDice = function (dice) {
  return  Math.floor((Math.random() * this.dice) + 1)
}
Player1.prototype.newRolled = function (dice)  {
  return this.turn + this.total
}
Player1.prototype.score = function (thisRoll) {
    if (thisRoll === 1) {
      alert("turn over")
    return this.turn = 0;
    }else {
      return this.turn += thisRoll;
    }
  }
function Player1() {
  this.player = 'Player 1';
  this.roll = [];
  this.turn = 0;
  this.total = 0;
  }
// }


$(function(){
  var game = new LetsPlay();
  $(".btn").click(function(){
    var dice = game.gameDice.newDice();
    game.player1.score(dice);
    //var roll = game.player1.turn += dice;
     //game.player1.score();
    console.log(dice);
    console.log(game.player1.score());
  //  console.log(roll);

    $(".numberrolled").text(dice);
    $(".number1").text(game.player1.score());
 });
});
// };

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
