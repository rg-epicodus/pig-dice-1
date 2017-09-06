(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Dice(dice) {
  this.dice = 6;
}

Dice.prototype.newDice = function () {
  return  Math.floor((Math.random() * this.dice) + 1);
};

exports.diceModule =  Dice;

},{}],2:[function(require,module,exports){
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

},{"./../js/dice.js":1,"./../js/player.js":3}],3:[function(require,module,exports){
function Player() {
  this.turn = 0;
  this.total = 0;
}
Player.prototype.newRolled = function ()  {
   this.total += this.turn;
   return this.turn = 0;
};
Player.prototype.score = function (thisRoll) {
    if (thisRoll === 1) {
      // alert("Turn Lost, next player");
    return this.turn = 0;
    }else {
      this.turn += thisRoll;
      if (this.total >= 100) {
        this.turn = 0;
        this.total = 0;
        // alert("Winner!");
        return true;
      }
    }
  };
Player.prototype.hold = function() {
  this.total += this.turn;
  if (this.total >= 100) {
    this.total = 0;
    this.turn = 0;
    alert("Winner!");
  }
  return this.turn = 0;
};

exports.playerModule =  Player;

},{}]},{},[2]);
