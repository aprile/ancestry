function personDeath (data) {
  if (data.tag && data.tag !== 'INDI') return

  const person = data

  if (person.deat && person.deat.length <= 0) return

  // const birthDate = person.birt[0].date
  const deathDate = person.deat[0].date
  const deathPlace = person.deat[0].place

  // function getYear (date) {
  //   var year = date.match(/\d{4}/)
  //   return year
  // }
  //
  // const deathAge = (birth, death) => {
  //   // make specific to day
  //   const b = getYear(birth)
  //   const d = getYear(death)
  //   return (d - b)
  // }

  function getPronoun (person) {
    if (!person.sex) return
    if (person.sex.data === undefined) return 'they'

    const gender = person.sex.data.toString()

    if (gender === 'M') return 'he'
    else if (gender === 'F') return 'she'
    else return 'they'
  }

  getPronoun(person)

  const str0 = ' passed away '
  const str1 = ' on '
  const str2 = ' in '
  // const str3 = ', at the age of '

  return `
    ${getPronoun(person)}${str0}${str1}${deathDate}${str2}${deathPlace}.
  `
}

export default personDeath
