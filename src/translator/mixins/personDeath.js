function personDeath (data) {
  const person = data

  const birthDate = person.birt[0].date
  const deathDate = person.deat[0].date
  const deathPlace = person.deat[0].place

  function getYear (date) {
    var year = date.match(/\d{4}/)
    return year
  }

  //
  // TODO Make specific to day
  //
  const deathAge = (birth, death) => {
    const b = getYear(birth)
    const d = getYear(death)
    console.log('BIRTH', b, 'DEATH', d)
    return (d - b)
  }

  function getPronoun (person) {
    const gender = person.sex.data.toString()

    if (gender === 'M') return 'he'
    else if (gender === 'F') return 'she'
    else return 'they'
  }

  getPronoun(person)

  const str0 = 'passed away'
  const str1 = 'on'
  const str2 = 'in'

  return `${getPronoun(person)} ${str0} ${str1} ${deathDate} ${str2} ${deathPlace}, at the age of ${deathAge(birthDate, deathDate)}.`
}

export default personDeath
