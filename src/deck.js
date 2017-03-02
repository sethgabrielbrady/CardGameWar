



module.exports = function buildDeck() {




   let shuffleAr = [];
   let card = 1;
      for (j=0;j<13;j++){
          card ++;
        for(i=0; i <4; i++){
            shuffleAr.push(card);

          // if (card === 11){
          //   shuffleAr.push('J');
          //     }else if (card === 12){
          //       shuffleAr.push('Q');
          //     }else if (card === 13) {
          //       shuffleAr.push('K');
          //     }else if (card === 14){
          //       shuffleAr.push('A');
          //     }else {
          //       shuffleAr.push(card);
          //     }
          //
           }
          }
          // console.log(shuffleAr);//check for the array
          // console.log(shuffleAr.length); //check that the right amount of cards have been dealt
          return (shuffleAr);
};



// let output = buildDeck();
// console.log(output);
