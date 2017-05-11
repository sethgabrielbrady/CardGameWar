



module.exports = function buildDeck() {
  let shuffleAr = [];
  let card = 1;


  //creates an array of 52 cards counting from 2-14
  for (let j=0;j<13;j++){
    card ++;
    for( let i=0; i <4; i++){
      // shuffleAr.push(card);
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

  //shuffles the array
  let exchange;
  let temporary;

  //this is the fisher-yates shuffle algorithm
  for (a = shuffleAr.length - 1; a > 0; a--) {//a is made equal to the length of the
    //the array of values - 1, and as long as a > 0, a will substract from its "value"
    exchange = Math.floor(Math.random() * a);//var exchange points to the floor of a number
    //generated between 0 and the value of a
    temporary = shuffleAr[a];//sets var temporary to shuffleAr@ index a
    shuffleAr[a] = shuffleAr[exchange];//index of shuffleAr @ a is made to point to the
    //same value index of shuffleAr[exchange]
    shuffleAr[exchange] = temporary;//and now the value at index that exchange points to is
    //set to the same index of the whatever temporary pooints to.
  }

  return (shuffleAr);
};


// console.log (module.exports());
