var Dice = require("./../js/dice.js").diceModule;
var Player = require("./../js/player.js").playerModule;

describe('Dice', function(){
  it('should test whether it can instantiate', function(){
      var dice = 1;
      var diceRoll = new Dice(dice);
      var newDice = Math.floor((Math.random() * diceRoll.dice) + 1);
      expect(newDice).toEqual(1);
  });
});
describe('Player', function(){
  it('should test whether it can hold', function (){
    var player = new Player();
    expect(player.hold()).toEqual(0);
    expect(player.score(1)).toEqual(0);
  });
});
describe('Player', function(){
  it('should test dice adding to score', function(){
    var player = new Player();
    var diceRoll = new Dice();
    var newDice = Math.floor((Math.random() * diceRoll.dice) + 1);
    console.log(newDice);
    expect(player.hold(newDice)).toEqual(0);
  });
});
