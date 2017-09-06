function Dice(dice) {
  this.dice = 6;
}

Dice.prototype.newDice = function () {
  return  Math.floor((Math.random() * this.dice) + 1);
};

exports.diceModule =  Dice;
