// deck.js file must export a single function which
//
//     returns an array of shuffled card values.
//     There should be FOUR of each value: 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', and 'A'.
//     Note that you DO NOT need to worry about suits (unless you do Adventure Mode).
//
//
// 1) create a function that spits pout a random number between 1 and 52
//
//
//
//



 // module.exports =
 function buildDeck(maxNumber){

  let deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];//array of cards
  let draw;//rng
  let dealArray = [];
  let countObj = {};

  //I need to create a loop to add more values to the array
  for(i=0; i<=52; i++){//loop
    draw = (Math.ceil(Math.random() * maxNumber) - 1);//random number
    dealArray.push(deck[draw]);
        // countObj.draw = countObj[draw] + 1;
          //
          // draw = (Math.ceil(Math.random() * maxNumber) - 1);//this might not be needed
          // i = i - 1;
      }
      // console.log(dealArray);
      return dealArray;

};


// buildDeck(13);
let output = buildDeck(13);
console.log(output);






//must return an array of shuffled card values
//
//There should be FOUR of each value:
// 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', and 'A'.
//
//
// I need to put a count on each card. If the count reaches 4, then the dealer
// function must return a suite value that doesnt equal 4. It will deal these cards
// unitl all cards have reach the value of 4
//
// 10-13 will be face cards
//
//
// first- i need to build my deck with 4 of each value
//    todo this is should
//        run my rng
//        check if that value has already been generated 4 times
//            if it hasnt-push it into and array
//            otherwise -re roll and try again.
//            when the generator has reached 52 cards total (or 26 in two arrays)
//            stop rolling
//
//
//
//
//            function wordFrequency(inputString){
//     let splitString = inputString.split(' ');
//     let stringContainer = {};
//
//     splitString.forEach(function propertyAdd(each){
//         if (stringContainer[each] >= 1){
//             stringContainer[each] = stringContainer[each] + 1;
//           }else {
//               stringContainer[each] = 1;
//               }
//         });
//
//         return stringContainer;
// //
