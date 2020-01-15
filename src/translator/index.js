import personName from './mixins/personName'
import personBirth from './mixins/personBirth'
import personDeath from './mixins/personDeath'

function gedcomTranslate (data) {
  const d = data[2]
  return personName(d) + personBirth(d) + personDeath(d)
}

export default gedcomTranslate
