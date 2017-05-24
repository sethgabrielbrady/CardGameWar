

let output = require('./deck.js');
let deck = output();

/**
 * @param  {Array} players
 */
module.exports = function war(players){

  if (players === undefined || !Array.isArray(players))  {
    return "Must pass an array in the first posiition.";
  }

  if (players.length <= 1 || players.length > 2){
    return "Must only be two players";
  }

  if (players[0] === players[1] || players[0] === players[1].toLowerCase() ){
    return "Must be two different players";
  }



  let p1Name = players[0];
  let p2Name = players[1];
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
      pOneWins++;
    }else if (indexValues.indexOf(p1Cards[j]) < indexValues.indexOf(p2Cards[j])){
      pTwoWins++;
    }else{
      tie++;
    }
  }


  let hour =  now.getHours();
  if (hour > 12){
    hour = '0' + hour % 12;
  }

  let minutes = now.getMinutes();
  if (minutes < 10){
    minutes = '0' + minutes;
  }

  let pOneObj = {
    name:players[0],
    numberOfWins: pOneWins,
    winRatio:(pOneWins / hands).toFixed(2)
  };

  let pTwoObj = {
    name:players[1],
    numberOfWins: pTwoWins,
    winRatio:(pTwoWins / hands).toFixed(2)
  };

  let scoreSheet = {
    date: now.getMonth() + 1 + '-' + now.getDate() + '-' + now.getFullYear() + ' at ' + hour + ':' + minutes,
    players:[pOneObj, pTwoObj],
    numberOfTies: tie
  };

  // console.log(scoreSheet);
  return scoreSheet;
};
