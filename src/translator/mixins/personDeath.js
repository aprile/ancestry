import formatDate from './formatDate'
import formatPronoun from './formatPronoun'

function capitalizeStr (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function getYear (date) {
  var year = date.match(/\d{4}/)
  return year
}

function personDeath (data) {
  if (data.tag && data.tag !== 'INDI') return

  const person = data

  if (person.deat && !person.deat.length) return

  let result = ''

  const pronoun = formatPronoun(person)
  result += capitalizeStr(pronoun) + ' passed away'

  let deathDate = person.deat[0].date
  const deathPlace = person.deat[0].place

  if (deathDate) {
    //
    // AND birth date
    //
    const birth = person.birt && person.birt.length

    if (birth) {
      const birthDate = person.birt[0].date

      if (birthDate) {
        const deathAge = (birth, death) => {
          if (!birth || !death) return
          //
          // TODO make specific to day
          //
          const b = getYear(birth)
          const d = getYear(death)
          return (d - b)
        }

        if (deathAge) {
          result += ' at the age of ' + deathAge(birthDate, deathDate) + ', '
        }
      }
    }

    deathDate = formatDate(deathDate)
    result += ' on ' + deathDate
  }

  if (deathPlace) {
    result += ' in ' + deathPlace
  }

  result += '. '

  return result
}

export default personDeath
