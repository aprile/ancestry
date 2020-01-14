import getByTag from './getByTag'

const getEvent = (el, type) => {
  if (!el.tree) return

  const node = getByTag(el.tree, type)[0]
  if (!node) return

  const o = {}

  if (node.data) {
    o.data = node.data
  }

  if (node.tree) {
    const eventDate = getByTag(node.tree, 'DATE')[0]
    const eventPlace = getByTag(node.tree, 'PLAC')[0]

    if (eventDate) o.date = eventDate.data
    if (eventPlace) o.place = eventPlace.data
  }

  return o
}

export default getEvent
