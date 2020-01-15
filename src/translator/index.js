import personName from './mixins/personName'
import personBirth from './mixins/personBirth'
import personDeath from './mixins/personDeath'

const result = document.querySelector('.result')

function formatEntry (entry) {
  const textnode = document.createTextNode(entry)
  const node = document.createElement('p')

  node.appendChild(textnode)
  result.appendChild(node)
}

function gedcomTranslate (obj) {
  const entries = obj.entries
  let data = ''

  result.textContent = ''

  entries.map(entry => {
    const str = personName(entry) + personBirth(entry) + personDeath(entry)
    formatEntry(str)

    data = data.concat(str)
  })

  return data
}

export default gedcomTranslate
