import getTags from './tags'

function getName (el) {
  if (!el.tree) return

  const node = getTags(el.tree, 'NAME')[0]
  if (!node) return

  const o = {}
  const nameData = node.data

  o.data = nameData

  if (node.tree) {
    const fName = getTags(node.tree, 'GIVN')[0]
    const lName = getTags(node.tree, 'SURN')[0]
    const nName = getTags(node.tree, 'NICK')[0]

    if (fName) o.givn = fName.data
    if (lName) o.surn = lName.data
    if (nName) o.nick = nName.data
  } else if (nameData) {
    const [fName, lName] = nameData.split('/').map(n => n.trim())
    const p = { givn: fName, surn: lName }
    const merged = Object.assign(p, o)

    return merged
  }

  return o
}

export default getName
