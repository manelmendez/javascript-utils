// Esta función recibe dos strings, uno con zombies y otro con humanos, y devuelve un string con el resultado de la batalla.
function battleHorde(zombies, humans) {
  const zombiesA = zombies.split('')
  const humansA = humans.split('')
  let result = 0
  for (const [i,zombie] of zombiesA.entries()) {
    if (result<0) {
      result = Number(zombie) - (Number(humansA[i])+(-result))
    }
    else if (result>0) {
      result = (Number(zombie)+result) - Number(humansA[i])
    }
    else result = Number(zombie) - Number(humansA[i])
  }
  if (result<0){
    return `${(-result)}h`
  }
  else if (result>0) {
    return `${result}z`
  }
  else return 'x'
}

console.log(battleHorde('232', '434')) // 'h4'

// hay una forma mucho mas sencilla de hacer esto, con solo 3 lineas de codigo
// el reduce esta sumando los valores de los zombies y restando los valores de los humanos
// acumulando el resultado en la variable acc
// y luego se retorna el resultado
function battleHorde2(zombies, humans) {
  const result = zombies.split('').reduce((acc, zombie, i) => acc + Number(zombie) - Number(humans[i]), 0)
  return result > 0 ? `${result}z` : result < 0 ? `${-result}h` : 'x'
}

console.log(battleHorde2('232', '434')) // 'h4'

// y la otra forma sencilla pero mas entendible seria
// iterar sobre los arrays de zombies y humanos y sumar los valores
// de los zombies y restar los valores de los humanos
// y retornar el resultado
function battleHorde3(zombies, humans) {
  let result = 0
  for (let i=0; i<zombies.length; i++) {
    result += Number(zombies[i]) - Number(humans[i])
  }
  return result > 0 ? `${result}z` : result < 0 ? `${-result}h` : 'x'
}

console.log(battleHorde3('232', '434')) // 'h4'

// y otra opcion seria sumando los numeros de las cadenas de texto de cada ejercito
// y luego restando el resultado de los zombies al de los humanos
// y retornar el resultado (sin usar reduce)
function battleHorde4(zombies, humans) {
  let z = 0
  let h = 0
  for (let i=0; i<zombies.length; i++) {
    z += Number(zombies[i])
    h += Number(humans[i])
  }
  const result = z - h
  return result > 0 ? `${result}z` : result < 0 ? `${-result}h` : 'x'
}

console.log(battleHorde4('232', '434')) // 'h4'