// Code your solutions in this file
const namesArray = ["Ada", "Brendan", "Ali"];
const eventName = birthday;

function writeCards(namesArray, eventName) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouCards;
}
function countDown(startingNumber) {
    while (startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  } 