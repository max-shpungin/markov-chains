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

    const markovChains = {};

    for (let i = 0; i < this.words.length; i++) {
     // const currentChain = [];
      markovChains[this.words[i]] = this.words[i + 1] === undefined ?
        [null] : [this.words[i + 1]];
    }
    return markovChains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    // iterate through this.chain. Maybe iterate through just the object keys
    // for that object key, access object value and pick a random word from array
    // let currentWord =

    const words = Object.keys(this.chains);
    // [The, cat, in, the, hat];
    // const newString = words.map(w => newString += _.sample(chains[w]) )
    // if randomWord == null, return newString and break; else restart loop
    const markOvString = '';
    // let index = words[words.length-1];

    for(let i = 0; i < words.length; i++){
      markOvString += words[i];
      randomWord = _.sample(chains[word]);
      markOvString += randomWord;
    }
  }
}

module.exports = {
  MarkovMachine,
};
