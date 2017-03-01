
// Here we will use your `game.js` file to run a game. Feel free to change
// things in here, but once you have created the game correctly, this file
// should run as is.

let game = require('./game.js');

let results = game(['Jordan', 'Russell']);

console.log(`A game of War played ${results.date} between ${results.players[0].name} and ${results.players[1].name}...`);
console.log(
    `It appears that ${results.players[0].name} won ${results.players[0].numberOfWins} times
    and ${results.players[1].name} won ${results.players[1].numberOfWins} times.
    (There were ${results.numberOfTies} tie hands.)`
);
