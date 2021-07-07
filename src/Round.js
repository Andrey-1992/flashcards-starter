const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.currentCard = deck.allCards[0];
    this.currentCardTest = deck.allCards
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(userGuess) {
    this.turns ++;
    // this.currentCard.pop();
    const turn = new Turn(userGuess, this.currentCard);
    // const evaluateGuess = turn.evaluateGuess();
    this.addIncorrectAnswersId(turn.evaluateGuess());
    return turn.giveFeedback();

  }
  addIncorrectAnswersId(badGuess) {
    if (!badGuess) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
  }
};

module.exports = Round;
