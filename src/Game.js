const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');

class Game {
  constructor() {
    this.cards = [];
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.createCards()
  }

  createCards() {
    prototypeQuestions.forEach((question) => {
      this.cards.push(new Card(question.id, question.question, question.answers, question.correctAnswer));
    })
  }



}

module.exports = Game;
