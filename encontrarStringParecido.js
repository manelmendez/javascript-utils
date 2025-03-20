function findTheKiller(whisper, suspects) {
  const normalizedWhisper = whisper.toLowerCase()
  const whisperClean = normalizedWhisper.endsWith('$') ? normalizedWhisper.slice(0, -1) : normalizedWhisper
  const searchSuspects = (suspect) => {
    suspect = suspect.toLowerCase()
    if (normalizedWhisper.endsWith('$') && whisperClean.length !== suspect.length) return false
    return [...whisperClean].every((char, index) => {
      return char === '~' || char === suspect[index];
    });
  }
  return suspects.filter(searchSuspects).join(',')
}

function findTheKiller2(whisper, suspects) {
  const normalizedWhisper = whisper.toLowerCase()
  const whisperClean = normalizedWhisper.endsWith('$') ? normalizedWhisper.slice(0, -1) : normalizedWhisper
  const searchSuspects = (suspect) => {
    suspect = suspect.toLowerCase()
    if (normalizedWhisper.endsWith('$') && whisperClean.length !== suspect.length) return false

    for (let i = 0; i < whisperClean.length; i++) {
      if (whisperClean[i] !== '~' && whisperClean[i] !== suspect[i]) {
        return false
      }
    }
    return true
  }
  return suspects.filter(searchSuspects).join(',')
}

const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

console.log(findTheKiller2(whisper, suspects)) // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

console.log(findTheKiller2(whisper2, suspects2)) // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd~$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

console.log(findTheKiller2(whisper3, suspects3)) // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']

console.log(findTheKiller2(whisper4, suspects4)) // -> ''