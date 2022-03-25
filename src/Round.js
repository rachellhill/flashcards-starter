const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = {};
    this.turns = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  };

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id)
    }
    return turn.giveFeedback();
  };

  calculatePercentageCorrect() {
    const cardCount = this.deck.countCards();
    const correctAnswers = cardCount - this.incorrectGuesses.length;
    const percentage = (correctAnswers / cardCount) * 100;
    const roundedPercentage = Math.round(percentage);
    return roundedPercentage;
  };

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`;
  };
};

module.exports = Round;
