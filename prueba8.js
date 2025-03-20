function createXmasTree(height, ornament) {
  const totalLength = height + height - 1;
  let result = '';
  for (let i = 1; i <= height; i++) {
    let ornamentLength = i * 2 - 1;
    let padding = (totalLength - ornamentLength) / 2;
    result += `${'_'.repeat(padding) + ornament.repeat(ornamentLength) + '_'.repeat(padding)}\n`
  }
  let padding = (totalLength - 1) / 2
  let trunk = '_'.repeat(padding) + '#' + '_'.repeat(padding)
  result += trunk + '\n' + trunk;
  return result
}

const tree = createXmasTree(5, '*')
console.log(tree)