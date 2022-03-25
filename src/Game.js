const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.cards = [];
  };

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
};

  printQuestion(round) {
      util.main(round);
  };

  start() {
    this.createCards();
    this.createDeck();
    this.createRound();
    this.printMessage(this.deck);
    this.printQuestion(this.currentRound);
  };

  createCards() {
    prototypeQuestions.forEach((question) => {
      this.cards.push(new Card(question.id, question.question, question.answers, question.correctAnswer));
    });
  };

  createDeck() {
    this.deck = new Deck(this.cards)
  };

  createRound() {
    this.currentRound = new Round(this.deck);
  };
};

module.exports = Game;
