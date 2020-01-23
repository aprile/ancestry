function getPronoun (person) {
  if (!person.sex) return
  if (person.sex.data === undefined) return 'they'

  const gender = person.sex.data.toString()

  if (gender === 'M') return 'he'
  else if (gender === 'F') return 'she'
  else return 'they'
}

export default getPronoun
