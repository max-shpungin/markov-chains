"use strict";

const _ = require('lodash');


/** Textual markov chain generator. */

class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    //['The','cat,','in','the','hat.']

    // loop through the array, for each word get the subsequent word....

    if(this.words.length === 0){
      process.exit(1)
    }

    const markovChains = {};

    for (let i = 0; i < this.words.length; i++) {
      const word = this.words[i];
      const nextWord = this.words[i + 1] || null;

      if (!markovChains[word]) {
        markovChains[word] = [];
      }
      markovChains[word].push(nextWord);
    }

    return markovChains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    let markovString = '';
    let currentWord = this.words[0]; //start with first word of text input

    while (currentWord) {
      markovString += `${currentWord} `;
      currentWord = _.sample(this.chains[currentWord]);
    }
    //TODO: Improvement opportunity: We have an On2 within our while loop.
    //  Create a words array, and push to array (O1).
    // Join the array.

    return markovString.trim();
  }
}

module.exports = {
  MarkovMachine,
};

// let machine = new MarkovMachine("The cat is in the hat. The cat is the cat.
// The hat is a cat.");

// machine.getText();