const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card, turn , incorrectGuess, correctGuess, incorrectTurn, correctTurn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    incorrectGuess = 'pug';
    correctGuess = 'sea otter';
    incorrectTurn = new Turn(incorrectGuess, card);
    correctTurn = new Turn(correctGuess, card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(correctTurn).to.be.an.instanceof(Turn);
  });

  it('should be able to store a guess', function() {
    expect(correctTurn.guess).to.equal(correctGuess);
  });

  it('should be able to take in an a Card object', function() {
    expect(typeof incorrectTurn.card).to.equal('object');
  });

  it('should return a guess', function() {
    expect(incorrectTurn.returnGuess()).to.equal(incorrectGuess);
  });

  it('should return the card', function() {
    expect(incorrectTurn.returnCard()).to.equal(card);
  });

  it('should check to see if guess is correct', function() {
    expect(correctTurn.evaluateGuess()).to.be.true;
  });

  it('should check to see if guess is incorrect', function() {
    expect(incorrectTurn.evaluateGuess()).to.be.false;
  });

  it('should give feedback if the guess is incorrect', function() {
    expect(incorrectTurn.giveFeedback()).to.equal('incorrect!');
  });

  it('should give feedback if the guess is correct', function() {
    expect(correctTurn.giveFeedback()).to.equal('correct!');
  });
});
