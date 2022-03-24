const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  let game = new Game();
  it('should be a function', function() {
    // const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    // const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  })

  it('should have a method to start the game', function() {
    // const game = new Game();
    expect(game.start).to.be.a('function');
  })

  it('should be able to start the game', function() {
    game.start();
  })

  it('should be able to create cards', function() {
    // const game = new Game();
    expect(game.cards.length).to.equal(prototypeQuestions.length)
  })

  it('should store cards in a deck', function() {
    // const game = new Game();
    // check if the cards above are an instance of card
    // check if deck.cards contains it?
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card)
  })

  it('should store the deck within a current round', function() {
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
  })

  it('should store the current round', function() {
    expect(game.currentRound).to.be.an.instanceof(Round);
  })

  it('should be able to take turns', function() {
    prototypeQuestions.forEach(question => {
      game.currentRound.takeTurn(question.correctAnswer)
    })
    expect(game.currentRound.turns).to.equal(prototypeQuestions.length);
  })

  it('should be able to calculate percentage', function() {
    expect(game.currentRound.calculatePercentageCorrect()).to.equal(100)
  })

  it('should be able to end the round', function() {
    expect(game.currentRound.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!')
  })
});
