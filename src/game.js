





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


//pushes the shuffled cards into two seperate arrays for each player
  for(i=0; i<deck.length; i++){
      p1Cards.push(deck[i]);
        i++;
      p2Cards.push(deck[i]);
  }

// console.log(p1Cards);
// console.log(p2Cards);

//compares the indexes of each player array
  for(j=0; j<p1Cards.length; j++){
      hands ++;
    if (p1Cards[j] > p2Cards[j]){
      pOneWins++;
      }else if (p1Cards[j] < p2Cards[j]){
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


//***************************************TESTING*******************

    // console.log(scoreSheet);
    // // console.log(pTwoObj);
    // // console.log(pOneObj);
    //  console.log(deck.length);
    // // console.log (deck);
    // // console.log('Player 1 ' + pOneWins);
    // // console.log('Player 2 ' + pTwoWins);
    // // console.log('Ties ' + ties);
    // console.log('Hands played ' + hands);
      return scoreSheet;
}

// war();
