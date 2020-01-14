function personName (data) {
  const person = data

  const firstName = person.name.givn
  const lastName = person.name.surn

  return `${firstName} ${lastName}`
}

export default personName
