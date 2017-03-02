



module.exports = function buildDeck() {
    let shuffleAr = [];
    let card = 1;


//cretes an array of 52 cards counting from 2-14
    for (j=0;j<13;j++){
        card ++;
      for(i=0; i <4; i++){
          shuffleAr.push(card);


          //add a face value to card 11-14
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
          }
        }

//shiffles the array 
  let exchange;
  let temporary;

    for (a = shuffleAr.length - 1; a > 0; a--) {
        exchange = Math.floor(Math.random() * a);
        temporary = shuffleAr[a];
        shuffleAr[a] = shuffleAr[exchange];
        shuffleAr[exchange] = temporary;
    }

      return (shuffleAr);
};
