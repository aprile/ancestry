import formatDate from './formatDate'

function personBirth (data) {
  if (data.tag && data.tag !== 'INDI') return

  const person = data
  let result = ''

  if (person.birt && !person.birt.length) return result

  //
  // birth date
  //
  let birthDate = person.birt[0].date

  if (birthDate) {
    birthDate = formatDate(birthDate)
    result += ' was born ' + birthDate
  }

  //
  // birth place
  //
  const birthPlace = person.birt[0].place

  if (birthPlace) {
    result += ' in ' + birthPlace
  }

  result += '. '

  return result
}

export default personBirth
