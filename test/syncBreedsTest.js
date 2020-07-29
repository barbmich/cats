const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  
  it('returns breed details for the Bombay breed', () => {
    const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking.";
    const bombay = breedDetails('Bombay');
    assert.equal(bombay, expectedDesc);
  })

  it('returns breed details for the Bombay breed', () => {
    const expectedDesc = "Balinese are curious, outgoing, intelligent cats with excellent communication skills.";
    const Balinese = breedDetails('Balinese');
    assert.equal(Balinese, expectedDesc);
  })

  it('returns undefined if no breed is requested', () => {
    const expectedDesc = undefined;
    const Balinese = breedDetails();
    assert.equal(Balinese, expectedDesc);
  })

});