
/** ************************************************
 *             DO NOT CHANGE THIS FILE!
 *  ************************************************/


let assert = require('assert');      // require Mocha's tools
let expect = require('chai').expect; // but use Chai for assertions

const DATE_REGEX = /^[0-9]{1,2}\-[0-9]{1,2}\-[0-9]{4} at [0-9]{1,2}\:[0-9]{2}$/;

describe('In the game', function() {
    let game = require('../src/game.js');

    describe('the exported value', function() {
        it('should be a function with a name', function() {
            expect(game).to.be.a('function');
            expect(game.name).to.be.a('string').and.have.property('length').that.is.above(0);
        });
    });

    describe('the basic game functionality', function() {
        it('should return an error message if given no args', function() {
            let result = game();
            expect(result).to.be.a('string');
            expect(result.length).to.be.above(0);
        });

        it('should require an array of exactly two DIFFERENT players', function() {
            let result = game('jess');
            expect(result).to.be.a('string');
            expect(result.length).to.be.above(0);
            result = game('jess', 'jack');
            expect(result).to.be.a('string');
            expect(result.length).to.be.above(0);
            result = game([]);
            expect(result).to.be.a('string');
            expect(result.length).to.be.above(0);
            result = game(['jess']);
            expect(result).to.be.a('string');
            expect(result.length).to.be.above(0);
            result = game(['jess', 'jack', 'jane']);
            expect(result).to.be.a('string');
            expect(result.length).to.be.above(0);
            result = game(['jess', 'jess']);
            expect(result).to.be.a('string');
            expect(result.length).to.be.above(0);
            result = game(['jess', 'Jess']);
            expect(result).to.be.a('string');
            expect(result.length).to.be.above(0);
        });

        it('should return the correct object & properties given two players', function() {
            let result = game(['jess', 'jack']);
            expect(result).to.be.an('object');
            expect(result.date).to.match(DATE_REGEX);
            expect(result).to.have.property('players').that.is.an('array');
            expect(result.players.length).to.equal(2);
            expect(result.players[0]).to.have.all.keys('numberOfWins', 'name', 'winRatio');
            expect(result.players[1]).to.have.all.keys('numberOfWins', 'name', 'winRatio');
            expect(result.numberOfTies).to.be.a('number');
            expect(result.numberOfTies + result.players[0].numberOfWins + result.players[1].numberOfWins).to.equal(26);
        });
    });
});
