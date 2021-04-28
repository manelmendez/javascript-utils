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