import getData from './mixins/data'
import getName from './mixins/names'
import getChildren from './mixins/children'
import pushEvent from './mixins/events'

const gedcom = require('parse-gedcom')

function readGedcom (input) {
  const parseGedcom = JSON.stringify(gedcom.parse(input), null, 2)
  const obj = JSON.parse(parseGedcom)

  // obj.forEach(el => console.log(el))

  function createEntry (el) {
    const o = {
      id: el.pointer || '',
      tag: el.tag
    }

    if (el.tag === 'FAM') {
      o.husb = getData(el, 'HUSB')
      o.wife = getData(el, 'WIFE')
      o.marr = pushEvent(el, 'MARR')
      o.children = getChildren(el)
    }

    if (el.tag === 'INDI') {
      o.name = getName(el)
      o.sex = getData(el, 'SEX')
      o.birt = pushEvent(el, 'BIRT')
      o.deat = pushEvent(el, 'DEAT')
      o.buri = pushEvent(el, 'BURI')
      o.chr = pushEvent(el, 'CHR')
    }

    return o
  }

  function combineEntries () {
    const target = []

    obj.forEach(el => { target.push(createEntry(el)) })

    console.log('Output:', target)
  }

  combineEntries()
}

export default readGedcom
