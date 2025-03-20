// en esta funcion buscamos el camino mas corto en una matriz y solo se puede ir a la derecha o abajo
// la funcion recibe una matriz de nxm y retorna el camino mas corto
function findSafestPath(dream) {
  // primero obtenemos las dimensiones de la matriz
  const n = dream.length
  const m = dream[0].length
  // creamos una matriz de nxm con ceros
  const dp = Array(n).fill().map(() => Array(m).fill(0))
  console.log(dp)
  // el primer valor de la matriz dp es el mismo que el de la matriz dream
  dp[0][0] = dream[0][0]
  // llenamos la primera fila y la primera columna
  // con la suma acumulada de la matriz dream
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + dream[i][0]
  }
  console.log(dp)
  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + dream[0][j]
  }
  console.log(dp)
  // llenamos el resto de la matriz dp
  // con la suma acumulada de la matriz dream
  // y el valor minimo entre el valor de arriba y el de la izquierda
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + dream[i][j]
    }
  }
  console.log(dp)
  // retornamos el valor de la ultima celda de la matriz dp
  return dp[n - 1][m - 1]
}

const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]

console.log(findSafestPath(dream)) // Devuelve 7

// esto tb puede hacerse usando un array en lugar de una matriz para guardar el mejor camino
// y solo se necesita un array de tamaño m
// y se va actualizando en cada iteracion
function findSafestPath2(dream) {
  const rows = dream.length
  const cols = dream[0].length
  const dp = []
  dp[0] = dream[0][0]
  console.log(dp)
  // aqui recorremos la primera fila de la matriz dream
  // por eso sumamos el valor de dream[0][col]
  // el for es de cols porque cols representa lo larga que es una fila de la matriz
  for (let col = 1; col < cols; col++) {
    // llenamos el array dp con la suma acumulada de la primera fila
    // esto sirve para llenar la primera fila de la matriz dp
    dp[col] = dp[col - 1] + dream[0][col] // aqui deberia sumar 1 + 3 = 4
    // asi que dp deberia ser [1, 4]
    // y luego sumar 4 + 1 = 5
    // asi que dp deberia ser [1, 4, 5]
    console.log(dp)
  }
  // aqui recorremos las filas restantes de la matriz dream
  // en el primer for recorremos las filas
  // y en el segundo for recorremos las columnas
  for (let row = 1; row < rows; row++) {
    // llenamos el array dp con la suma acumulada de la primera columna
    // asi que aqui deberia sumar 1 + 1 = 2
    // que es el valor de dp[0] + el valor de dream[1][0]
    // asi que dp deberia ser [2, 4, 5]
    dp[0] += dream[row][0]
    console.log(dp)
    for (let col = 1; col < cols; col++) {
      // entonces en el primer caso, tras obtener [2, 4, 5]
      // estariamos en dream[1][1] que es 5
      // y dp[1] es 4
      // asi que el Math.min seria entre dp[1] y dp[0]
      // que es 4 y 2, el minimo es 2
      // por lo que dp[1] seria 2 + 5 = 7
      // asi que dp deberia ser [2, 7, 5]
      // luego pasamos a dream[1][2] que es 1
      // y dp[2] es 5
      // asi que el Math.min seria entre dp[2] y dp[1]
      // que es 5 y 7, el minimo es 5
      // por lo que dp[2] seria 5 + 1 = 6
      // asi que dp deberia ser [2, 7, 6]
      // y asi succesivamente
      dp[col] = Math.min(dp[col], dp[col - 1]) + dream[row][col]
      // esto basicamente nos esta guardando el valor minimo de ir a la derecha o abajo
      // y sumando el valor de la celda actual
      console.log(dp)
    }
  }
  console.log(dp)
  return dp[cols - 1]
}

console.log(findSafestPath2(dream)) // Devuelve 7