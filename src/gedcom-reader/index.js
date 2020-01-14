import getData from './mixins/getData'
import getName from './mixins/getName'
import getChildren from './mixins/getChildren'
import pushEvent from './mixins/getEvent'

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
      o.marr = pushEvent('MARR')
      o.children = getChildren(el)
    }

    if (el.tag === 'INDI') {
      o.name = getName(el)
      o.sex = getData(el, 'SEX')
      o.birt = pushEvent('BIRT')
      o.deat = pushEvent('DEAT')
      o.buri = pushEvent('BURI')
      o.chr = pushEvent('CHR')
    }

    return o
  }

  function getIndividuals () {
    const target = []

    obj.forEach(el => { target.push(createEntry(el)) })

    console.log('Output:', target)
  }

  getIndividuals()
}

export default readGedcom
