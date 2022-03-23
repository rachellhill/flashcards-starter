class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    // attempt to refactor later - put in card class
    return (this.returnGuess() === this.card.correctAnswer)
  }
// refactor: move evaluate guess to card file

  giveFeedback() {
    if(this.evaluateGuess()) {
      return 'correct!'
    } else{
      return 'incorrect!'
    }
  }
}

module.exports = Turn;
