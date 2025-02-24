// Description: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
const createPotion = (potions, target) => {
  // Create a hash table to store the index of the complement
  // lo guardaria como key y el indice como valor, ej: {3: 0, 1: 1, 2: 2}
  const seen = {}
  // Iterate over the potions array
  for (let i=0; i<potions.length; i++) {
    // Calcula el complemento restando el valor actual de la pocion al target
    const complement = target - potions[i]
    // Si el complemento existe en el hash table, retornar el indice del complemento y el indice actual
    if (seen[complement] !== undefined) {
      return [seen[complement], i]
    }
    // Si no está en el hash table, agregar el valor actual de la pocion
    // como key y el indice como valor
    // asi se podrá buscar el complemento en las siguientes iteraciones
    // y retornar los indices de los valores que suman el target
    // el if es para evitar que se sobreescriba el valor del indice si el valor de la pocion se repite
    if (seen[potions[i]] === undefined) {
      seen[potions[i]] = i
    }
  }
}

// Este codigo está bien pero si tuvieramos que crear un objeto muy grande (seen)
// seria mas recomendable usar un Map ya que tiene mejor performance
// y es más eficiente en cuanto a memoria
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Este seria el código con Map
const createPotion2 = (potions, target) => {
  const seen = new Map()
  for (const [i, potion] of potions.entries()) {    
    const complement = target - potion
    if (seen.has(complement)) {
      return [seen.get(complement), i]
    }
    seen.set(potion, i)
  }
}


console.log(createPotion([3,1,2, 7, 11, 15], 9)) // [2, 3]
console.log(createPotion2([3,1,2, 7, 11, 15], 9)) // [2, 3]