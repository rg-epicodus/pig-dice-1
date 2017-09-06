var Dice = require("./../js/dice.js").diceModule;
var Player = require("./../js/player.js").playerModule;

$(function(){
    var player = new Player();
    var player2 = new Player();
    var dice = new Dice();

  $(".btn").click(function(){
    var diceRoll = dice.newDice();
    player.score(diceRoll);
    $(".numberrolled").text(diceRoll);
    $(".number1").text(player.turn);
 });
  $(".stop").click(function() {
    player.hold();
    $(".number1").text(player.total);
  });
  $(".btn1").click(function(){
    var diceRoll = dice.newDice();
    player2.score(diceRoll);
    $(".numberrolled").text(diceRoll);
    $(".number2").text(player2.turn);
  $(".stop1").click(function() {
    player2.hold();
    $(".number2").text(player2.total);
  });
  });
});
