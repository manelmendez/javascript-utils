function organizeShoes(shoes) {
  const shoesList = []
  const shoesMap = new Map()
  for (let { size, type } of shoes) {
    if (!shoesMap.has(size)) shoesMap.set(size, { I: 0, R: 0 });
    shoesMap.get(size)[type]++;
  }
  shoesMap.forEach(({ I, R }, size) => {
    const pairs = Math.min(I, R); // Cada par es un I y un R
    for (let i = 0; i < pairs; i++) {
      shoesList.push(size);
    }
  })
  return shoesList
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 38 }
]

console.log(organizeShoes(shoes)) // Expected: [38, 42]
console.log(organizeShoes(shoes2)) // Expected: [38, 38, 38]