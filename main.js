// multiplicar numeros (sumando)
const multiply = (a, b) => {
  let resultado = 0
  const positivo = Math.abs(b) == b
  for (let i = 0; i < Math.abs(b); i++) {
    resultado = positivo ? resultado + a : resultado - a
  }
  return resultado
}
const a = multiply(10, 9)
console.log(a)

// obtener el numero mayor en un array pero iterando solo 1 vez
const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b = getBiggest([-50, 30, 99, -7, 8, 102, 11])
console.log(b)

// escribir una funcion que elimine undefined, cero, null y false de un array iterando solo una vez
const clean = (arr) => arr.reduce((acc, el) => {
  if (el) {
    acc.push(el)
  }
  return acc
}, [])
const c = clean([false, 1, undefined, 0, null, 13, -5])
console.log(c)

// escribir una funcion que "aplane" los arrays en un solo nivel
const arr = [[1, 2], [[3, 4], [1, []]]]
const flatten = (arr) => arr.reduce((acc, el) => acc.concat(el))
const d = flatten(arr)
console.log(d)

//  escribir una funcion que cuente la cantidad de veces que se repite una palabra
const repeated = str => {
  const lowered = str.toLowerCase()
  const splitted = lowered.split(' ')
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++
    } else {
      acc[el] = 1
    }
    return acc
  }, {})
  return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}
const e = repeated('This is a repeated word test this is a a')
console.log(e)

// verificar si un string es un palíndromo (que se lee igual en ambas direcciones)
const isPalindrome = (str) => {
  //eliminar espacios
  str = str.replace(/\s/g, '')
  const lowered = str.toLowerCase()
  const splitted = lowered.split('')
  const reversed = splitted.reverse()
  const joined = reversed.join('')
  return lowered == joined
}
const f = isPalindrome('Do geese see God') //ej: reconocer
console.log(f)

//USAR CALLBACK ENTRE 2 funciones
// una funcion suma numeros segun unos limites
// la otra se encarga de comprobar si ya se ha hecho esa suma antes y devuelve un valor
// si no se ha hecho, se hace la operacion y se guarda gracias al callback

const memorizar = (callback) => {
  let results = {}
  return function (arg1, arg2) {
    if (!results[arg2-arg1]) {
      results[arg2-arg1] = callback(arg1,arg2)
    }
    return results[arg2-arg1]
  }
}

const sumNumbers = memorizar((inicial, limit) => {
  let sum = 0
  for (let i = 0; i < limit; i++) {
    sum += i
  }
  return sum
})

// la segunda y 3a llamada tardan menos
console.time('sum')
console.log(sumNumbers(2,100000))
console.timeEnd('sum')

console.time('sum')
console.log(sumNumbers(2,100000))
console.timeEnd('sum')

console.time('sum')
console.log(sumNumbers(2,100000))
console.timeEnd('sum')

// Create a function `isAnagram` that takes 2 strings as input and returns TRUE if
// the 2 strings are an anagram of eachother, false otherwise.

// An angram is a string formed by rearranging the characters of another string.
// Example: spar, formed from rasp.

// mi solucion de recorrer no es mala
function isAnagram(input1, input2) {
  // Yout function body here.
  const a = count(input1)
  const b = count(input2)
  for (const [key, value] of Object.entries(a)) {
    let found = false
    for (const [key2, value2] of Object.entries(b)) {
      if (found) {
        break
      }
      else if (key === key2) {
        found = true
        const equals = value === value2
        if (!equals) {
          return false
        }
      }
    }
  }
  return true
}

const count = (input) => {
  const inputSplit = input.split('')
  let inputCount = {}
  for (const letter of inputSplit) {
    if (inputCount[letter]) {
      inputCount[letter]++
    } else {
      inputCount[letter] = 1
    }
  }
  return inputCount
}



// usando array reduce

function isAnagram2(input1, input2) {
  const a = repeatedLetters(input1)
  const b = repeatedLetters(input2)
  for (const [key, value] of Object.entries(a)) {
    let found = false
    for (const [key2, value2] of Object.entries(b)) {
      if (found) {
        break
      }
      else if (key === key2) {
        found = true
        const equals = value === value2
        if (!equals) {
          return false
        }
      }
    }
  }
  return true
}

const repeatedLetters = str => {
  const input1Split = str.split('')
  const reduced = input1Split.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++
    } else {
      acc[el] = 1
    }
    return acc
  }, {})
  return reduced
  // return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}

// otras soluciones
// ordenando los strings y ver si son iguales
// esta es mas elegante
// separa el string en un array, lo ordena y lo vuelve a unir
// y luego compara los strings
const isAnagram3 = (input1, input2) => {
  const a = input1.split('').sort().join('')
  console.log(a)
  const b = input2.split('').sort().join('')
  console.log(b)
  return a === b
}


console.time('1')
// Should output TRUE
console.log(isAnagram("the detectives", "detect thieves"));
// Should output FALSE
console.log(isAnagram("javascript", "typescript"));
console.timeEnd('1')


console.time('2')
console.log(isAnagram("the detectives", "detect thieves"));
console.log(isAnagram("javascript", "typescript"));
console.timeEnd('2')

console.time('3')
console.log(isAnagram("the detectives", "detect thieves"));
console.log(isAnagram("javascript", "typescript"));
console.timeEnd('3')

