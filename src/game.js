





let output = require('./deck.js');
let deck = output();



function scores (player1, player2){

let pOneWins = 0;
let pTwoWins = 0;
let tie = 0;
let hands = 0;
let p1Cards = [];
let p2Cards =[];

for(i=0; i<deck.length; i++){
    p1Cards.push(deck[i]);
      i++;
    p2Cards.push(deck[i]);
}
// console.log(p1Cards);
// console.log(p2Cards);


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
    name:'Player1',
    numberOfWins: pOneWins,
    winRatio:(pOneWins / hands).toFixed(2)
};
let pTwoObj = {
    name:'Player2',
    numberOfWins: pTwoWins,
    winRatio:(pTwoWins / hands).toFixed(2)
};
let scoreSheet = {
    date: 0,
    players: [pOneObj , pTwoObj],
    numberOfTies: tie
};




//***************************************TESTING*******************

    console.log(scoreSheet);
    // console.log(pTwoObj);
    // console.log(pOneObj);
     console.log(deck.length);
    // console.log (deck);
    // console.log('Player 1 ' + pOneWins);
    // console.log('Player 2 ' + pTwoWins);
    // console.log('Ties ' + ties);
    console.log('Hands played ' + hands);

}

scores();





//the logic here is flawed-need tof fix

// for(i=1; i<=deck.length; i++){
//     if (deck[i] > deck[i++]){
//         hands++;
//         pOneWins++;
//       }else if (deck[i] < deck[i++]){
//           hands++;
//           pTwoWins++;
//
//         }else
//             i++;
//             hands++;
//             ties++;
//
//   }
//
