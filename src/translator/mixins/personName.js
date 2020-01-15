function personName (data) {
  const person = data

  const fName = person.name.givn
  const lName = person.name.surn

  if (fName && lName) return `${fName} ${lName}`
  else return person.name.data
}

export default personName
