// function Play (){
//
// function Random(dice) {
//   this.dice = 6;
// }
// }
playerOne = []
playerTwo = []

// function myFunction() {
// var diceRoll = Math.floor((Math.random() * 6) + 1);
//




function myFunction() {
var diceRoll = Math.floor((Math.random() * 6) + 1);
  $(".numberrolled").text(diceRoll);
  diceRoll = playerOne.push(diceRoll);
  var total1 = 0
  for (var i in playerOne) {
    // if (diceRoll === 1) {
    //   return total1 += playerOne[0];
    // } else {
    total1 += playerOne[i]
  }
  // }
  $(".number1").text(total1);

}
