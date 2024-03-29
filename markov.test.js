// TODO: declare test machine so that it's globally available
const { MarkovMachine } = require('./markov');

// TODO: replace arrow functions with anonymous functions
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
      "a":    ["cat."],
    }

    testMachine = new MarkovMachine('The cat is in the hat. The cat is the cat. The hat is a cat.');

    expect(testMachine.getChains()).toEqual(chains);

  });

});


describe('get Markov String', () => {
// TODO: indicate the difference between the 2 tests
  test("returns a string", () => {
    testMachine = new MarkovMachine('The cat is in the hat. The cat is the cat. The hat is a cat.');

    expect(testMachine.getText()).toEqual(expect.any(String));
  });

  // TODO: check to see if next word is in the array of possibilities

  test("returns a markov string", () => {
    testMachine = new MarkovMachine('The cat is in the hat.');
    expect(testMachine.getText()).toEqual('The cat is in the hat.');
  })
});