function organizeInventory(inventory) {
  const newInventory = {}
  for (let item of inventory) {
    if (!newInventory[item.category]) {
      newInventory[item.category] = {}
    }
    if (!newInventory[item.category][item.name]) {
      newInventory[item.category][item.name] = 0
    }
    newInventory[item.category][item.name] += item.quantity
  }
  return newInventory
}

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventory))

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }