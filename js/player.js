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
