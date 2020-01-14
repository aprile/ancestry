import personName from './mixins/personName'
import personBirth from './mixins/personBirth'
import personDeath from './mixins/personDeath'

function gedcomTranslate (data) {
  return personName(data[4]) + personBirth(data[4]) + personDeath(data[4])
}

export default gedcomTranslate
