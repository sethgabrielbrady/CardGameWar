

let output = require('./deck.js');
let deck = output();


module.exports = function war([player1, player2]){

  let pOneWins = 0;
  let pTwoWins = 0;
  let tie = 0;
  let hands = 0;
  let p1Cards = [];
  let p2Cards =[];
  let now = new Date ();
  let indexValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A'];

  //pushes the shuffled cards into two seperate arrays for each player
  for(let i=0; i<(deck.length); i++){//it would be better it iterate by 2 (i+=2) at one time
    p1Cards.push(deck[i]);
    i++;//iterates to the next i
    p2Cards.push(deck[i]);
  }

  //compares the indexes of each player array
  for(j=0; j<p1Cards.length; j++){
    hands ++;
    if (indexValues.indexOf(p1Cards[j]) > indexValues.indexOf(p2Cards[j])){
      pOneWins++;
    }else if (indexValues.indexOf(p1Cards[j]) < indexValues.indexOf(p2Cards[j])){
      pTwoWins++;
    }else
    tie++;
  }

  //***************************************OBJECTS*******************
  let pOneObj = {
    name:player1,
    numberOfWins: pOneWins,
    winRatio:(pOneWins / hands).toFixed(2)
  };
  let pTwoObj = {
    name:player2,
    numberOfWins: pTwoWins,
    winRatio:(pTwoWins / hands).toFixed(2)
  };
  let scoreSheet = {
    date: now.getMonth() + 1 + '-' + now.getDate() + '-' + now.getFullYear() + ' at ' + now.getHours() + ':' + now.getMinutes(),
    players: [pOneObj , pTwoObj],
    numberOfTies: tie
  };


  return scoreSheet;
};

// console.log (module.exports());
