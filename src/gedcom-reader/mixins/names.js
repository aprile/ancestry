import getTags from './tags'

function getName (el) {
  if (!el.tree) return

  const node = getTags(el.tree, 'NAME')[0]
  const o = {}

  if (node) {
    o.data = node.data

    if (node.tree) {
      const fName = getTags(node.tree, 'GIVN')[0]
      const lName = getTags(node.tree, 'SURN')[0]
      const nName = getTags(node.tree, 'NICK')[0]

      if (fName) o.givn = fName.data
      if (lName) o.surn = lName.data
      if (nName) o.nick = nName.data
    }
  }
  return o
}

export default getName
