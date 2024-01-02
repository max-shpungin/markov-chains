const { MarkovMachine } = require('./markov');

describe("get markov chains", ()=>{


  // empty input
  test("no input", ()=>{
    testMachine = new MarkovMachine('');

    expect(testMachine.getChains()).toEqual({"":[null]});

  });

  // regular input
  test("regular input", ()=>{

    const chains = {
      "The":  ["cat", "cat", "hat"],
      "cat":  ["is", "is"],
      "is":   ["in", "the", "a"],
      "in":   ["the"],
      "the":  ["hat.", "cat."],
      "hat.": ["The"],
      "cat.": ["The", null],
      "hat":  ["is"],
      "a":    ["cat"],
    }

    testMachine = new MarkovMachine('The cat is in the hat. The cat is the cat. The hat is a cat.');

    expect(testMachine.getChains()).toEqual(chains);

  });

});