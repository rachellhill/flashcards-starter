class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = {};
  }

  returnCurrentCard() {
    this.currentCard = this.deck[0];
    return this.currentCard;
  }
}

module.exports = Round;
