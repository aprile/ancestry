function personName (data) {
  if (data.tag && data.tag !== 'INDI') return

  const person = data
  let result = ''

  if (person.name) {
    const fName = person.name.givn
    const lName = person.name.surn
    const nameData = person.name.data

    if (fName && lName) result += fName + ' ' + lName
    else if (nameData) result += nameData
    else if (!nameData && fName) result += fName
    else if (!nameData && lName) result += lName
    else result = 'Unknown'

    return result
  }
}

export default personName
