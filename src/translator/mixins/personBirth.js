function personBirth (data) {
  if (data.tag && data.tag !== 'INDI') return

  const person = data

  if (person.birt && person.birt.length <= 0) return

  const birthDate = person.birt[0].date
  const birthPlace = person.birt[0].place

  const str0 = 'was born'
  const str1 = 'on'
  const str2 = 'in'
  const str3 = '. '

  return ` ${str0} ${str1} ${birthDate} ${str2} ${birthPlace}${str3}`
}

export default personBirth
