function personName (data) {
  if (data.tag && data.tag !== 'INDI') return

  const person = data

  if (person.name) {
    const fName = person.name.givn
    const lName = person.name.surn

    if (fName && lName) return `${fName} ${lName}`
    else return person.name.data
  }
}

export default personName
