
/** ************************************************
 *             DO NOT CHANGE THIS FILE!
 *  ************************************************/


let assert = require('assert');      // require Mocha's tools
let expect = require('chai').expect; // but use Chai for assertions

describe('In the deck', function() {
    let deck = require('../src/deck.js');

    describe('the exported value', function() {
        it('should be a function with a name', function() {
            expect(deck).to.be.a('function');
            expect(deck.name).to.be.a('string').and.have.property('length').that.is.above(0);
        });
    });

    describe('the basic deck building', function() {
        it('should return a deck of cards', function() {
            let result = deck();
            expect(result).to.be.an('array');
            expect(result.length).to.equal(52);
            expect(result[Math.floor(Math.random() * 52)]).to.match(/^(A|K|Q|J|10|[2-9])(H|S|D|C)?$/);
        });

        it('should not return cards in the same order each time', function() {
            let deckOne = deck();
            let deckTwo = deck();
            let deckThree = deck();
            expect(deckOne[0]).to.not.be.oneOf([ deckTwo[0], deckThree[0] ]);
            expect(deckOne[51]).to.not.be.oneOf([ deckTwo[51], deckThree[51] ]);
        });

        it('should return a deck with suits (ADVENTURE MODE)', function() {
            let result = deck();
            expect(result).to.be.an('array');
            expect(result.length).to.equal(52);
            expect(result[Math.floor(Math.random() * 52)]).to.match(/^(A|K|Q|J|10|[2-9])(H|S|D|C)$/);
        });
    });
});
