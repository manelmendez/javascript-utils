function prepareGifts(gifts) {
  let result = []
  for (let gift of gifts) {
    if (!result.includes(gift)) {
      result.push(gift)
    }
  }
  return result.sort((a, b) => a - b)
}

// Explicación de(a, b) => a - b:
// Si a - b es negativo, a se coloca antes que b.
// Si a - b es positivo, b se coloca antes que a.
// Si es cero, se consideran iguales y no se cambian.

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [3, 200, 1000, 1, 400, 2, 50000]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [1, 2, 3, 200, 400, 1000, 50000]

function prepareGifts2(gifts) {
  let result = new Set(gifts)
  return Array.from(result).sort((a, b) => a - b)
}
// al convertir el array en Set elimina los valores duplicados
// luego se convierte de nuevo en array y se ordena

const gifts3 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts3 = prepareGifts2(gifts3)
console.log(preparedGifts3) // [1, 2, 3, 4, 5]

const gifts4 = [3, 200, 1000, 1, 400, 2, 50000]
const preparedGifts4 = prepareGifts2(gifts4)
console.log(preparedGifts4) // [1, 2, 3, 200, 400, 1000, 50000]