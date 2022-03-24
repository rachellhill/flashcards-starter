const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  })

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  })

  it('should store deck of cards', function() {
    expect(round.deck).to.equal(deck);
  })

  it('should return current card in play', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should store turn count with a default value of zero', function() {
    expect(round.turns).to.equal(0);
  });

  it('should have a method called takeTurn', function() {
    expect(round.takeTurn).to.be.a('function');
  });

  it('should be able to evaluate guess and give feedback if guess is correct', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
  });

  it('should be able to evaluate guess and give feedback if guess is incorrect', function() {
    expect(round.takeTurn('pug')).to.equal('incorrect!');
  });

  it('should store ids of incorrect guesses in an array', function() {
    round.takeTurn('pug');
    expect(round.incorrectGuesses).to.deep.equal([card1.id]);
  });

  it('should be able to store ids of multiple incorrect guesses', function() {
    round.takeTurn('pug');
    round.takeTurn('spleen');
    round.takeTurn('watching Netflix');
    expect(round.incorrectGuesses).to.deep.equal([card1.id, card2.id, card3.id]);
  });

  it('should update turns for every turn', function() {
    round.takeTurn('pug');
    round.takeTurn('spleen');
    round.takeTurn('watching Netflix');
    expect(round.turns).to.equal(3);
  });

  it('should be able to calculate and return the percentage of correct guesses', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('playing with bubble wrap');
    expect(round.calculatePercentageCorrect()).to.equal(67);
  });

  it(`should have a method that ends the round by printing '** Round over! ** You answered <>% of the questions correctly!'`, function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap');
    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!');
  });
});
