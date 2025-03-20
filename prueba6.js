function createFrame(names) {
  let length = 0
  for (let name of names) {
    if (name.length > length) {
      length = name.length
    }
  }
  // para el length tb se puede usar Math.max(...names.map(name => name.length))
  // pero es menos eficiente porque recorre el array dos veces (map y Math.max)

  const border = '*'.repeat(length + 4);

  let frame = border + "\n";
  for (let str of names) {
    frame += `* ${str.padEnd(length)} *\n`;
  }
  frame += border;

  return frame;

  // const lines = strings.map(str => `* ${str.padEnd(maxLength)} *`);
  // return [border, ...lines, border].join("\n");

  // y esto puede ser mas bonito y mas leible
  // pero tambien es menos eficiente por el map y por el join y
  // la creacion de un array temporal
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']))

// Resultado esperado:
// ***************
// * midu *
// * madeval *
// * educalvolpz *
// ***************