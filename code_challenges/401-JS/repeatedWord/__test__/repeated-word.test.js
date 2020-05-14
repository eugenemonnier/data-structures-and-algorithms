const wordMatch = require('../repeated-word')

describe('wordMatch module', () => {
  test('should return the first word that is repeated.', () => {
    const princess = 'Once upon a time, there was a brave princess who...'
    const bestOfTimes = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'
    const rosenbergs = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'
    expect(wordMatch(princess)).toBe('a')
    expect(wordMatch(bestOfTimes)).toBe('it')
    expect(wordMatch(rosenbergs)).toBe('summer')
  })
  test('with a string with no repeated words, should return "No Match"', () => {
    const noRepeatedWords = 'We hold these truths to be self-evident, that all men are created equal...'
    expect(wordMatch(noRepeatedWords)).toBe('No Match!')
  })
})
