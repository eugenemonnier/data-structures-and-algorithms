function treeIntersection (treeA, treeB) {
  const treeArr = treeA.preOrder()
  const outputArr = treeB.matchTree(treeArr)
  if (outputArr < 1) outputArr.push('No matches found.')
  return outputArr
}

module.exports = treeIntersection
