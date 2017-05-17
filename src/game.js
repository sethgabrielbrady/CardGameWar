

let output = require('./deck.js');
let deck = output();


module.exports = function war([player1, player2]){

  let pOneWins = 0;
  let pTwoWins = 0;
  let tie = 0;
  let hands = 0;
  let gamesPlayed = 0;
  let p1Cards = [];
  let p2Cards =[];
  let now = new Date ();
  let indexValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A'];

  for(let i=0; i<(deck.length); i++){
    p1Cards.push(deck[i]);
    i++;
    p2Cards.push(deck[i]);
  }

  for(j=0; j<p1Cards.length; j++){
    hands ++;
    if (indexValues.indexOf(p1Cards[j]) > indexValues.indexOf(p2Cards[j])){
      console.log('Game: ', hands );
      console.log('Jordan wins with a:', p1Cards[j], ' versus Russell\'s: ', p2Cards[j]);
      pOneWins++;

    }else if (indexValues.indexOf(p1Cards[j]) < indexValues.indexOf(p2Cards[j])){
      console.log('Game: ', hands );
      console.log('Russel wins with a:', p2Cards[j], ' versus Jordan\'s: ', p1Cards[j]);
      pTwoWins++;
    }else{
      tie++;
    }
  }

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
