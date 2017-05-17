

module.exports = function buildDeck() {

  let shuffleAr = [];
  let card = 1;

  for (let j=0;j<13;j++){
    card ++;
    for( let i=0; i <4; i++){
      if (card === 11){
        shuffleAr.push('J');
      }else if (card === 12){
        shuffleAr.push('Q');
      }else if (card === 13) {
        shuffleAr.push('K');
      }else if (card === 14){
        shuffleAr.push('A');
      }else {
        shuffleAr.push(card);
      }
    }
  }

  let exchange;
  let temporary;

  for (let a = shuffleAr.length - 1; a > 0; a--) {
    exchange = Math.floor(Math.random() * a);
    temporary = shuffleAr[a];
    shuffleAr[a] = shuffleAr[exchange];
    shuffleAr[exchange] = temporary;
  }

  return (shuffleAr);
};
