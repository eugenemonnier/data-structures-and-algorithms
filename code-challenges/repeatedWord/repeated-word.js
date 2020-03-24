function wordMatch (str) {
  const modStr = str.toLowerCase().replace(/[^\w\s]/g, '')
  const wordMap = new Map()
  let matchedWord = 'No Match!'
  const wordArr = modStr.split(' ')
  for (let i = 0; i < wordArr.length; i++) {
    if (wordMap.has(wordArr[i])) {
      matchedWord = wordArr[i]
      break
    } else {
      wordMap.set(wordArr[i], wordArr[i])
    }
  }
  return matchedWord
}

module.exports = wordMatch
