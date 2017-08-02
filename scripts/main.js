/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
/*
var hand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "Q", "K", "J"];

let "K" = 10;
let "Q" = 10;
let "A" = [1, 11]
let "J" = 10;
*/

/* let hand = ["1", "2", "3", "4", "5","6","7","8","9","10","K","Q","J"]; */
/* NOTES
in test.js they've already dictated what the "hands" are
and we have to tell the computer how to interpret the hands.
Therefore turn the string into an integer, use the parse function to accomplish this.

*/

function handValue(hand) {
  let total = 0
  for (var i = 0; i < hand.length; i++) {
    if (parseInt(hand[i]) <= 10) {
      total += (parseInt(hand[i]))
    } else if ((hand[i] == "K") || (hand[i] == "Q") || (hand[i] == "J")) {
        total += 10
      } else if (hand[i] == "A") {
          total += 1}
  }

  for (var j = 0; j < hand.length; j++) {
    if (hand[j] == "A" && total <= 11){
      total +=10
    }
      }

  console.log(total)
  return total;
}






/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
