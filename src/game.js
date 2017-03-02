





let output = require('./deck.js');
let deck = output();



function scores (player1, player2){

let pOneWins = 0;
let pTwoWins = 0;
let ties = 0;
let hands = 0;
let j = i + 1;




console.log(deck.length);
console.log (deck);

   for(i=1; i<=deck.length; i++){

      if (deck[i] > deck[j]){
        hands++;
        pOneWins++;
        i++;
        j++;

      } else if (deck[i] < deck[j]){

        hands++;
        pTwoWins++;
        i++;
        j++;
    }

      else
        hands++;
        ties++;
        i++;
        j++;
      }




      let poneobj = {
          name:'PLayer1',
          numberOfWins:pOneWins,
          winRatio:0
      };

      let ptwoobj = {
          name:'PLayer2',
          numberOfWins:pTwoWins,
          winRatio:0
      };


    let scoreSheet = {
        date: 0,
        players: [poneobj , ptwoobj],
        numberOfTies:ties
    };




    console.log(scoreSheet);
    console.log(ptwoobj);
    console.log(poneobj);
    // console.log('Player 1 ' + pOneWins);
    // console.log('Player 2 ' + pTwoWins);
    // console.log('Ties ' + ties);
    console.log('Hands played ' + hands);

}

scores();
