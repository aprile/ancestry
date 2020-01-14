import getTags from './tags'

function getEventData (el, type) {
  if (!el.tree) return

  const node = getTags(el.tree, type)[0]
  if (!node) return

  const o = {}

  if (node.data) {
    o.data = node.data
  }

  if (node.tree) {
    const eventDate = getTags(node.tree, 'DATE')[0]
    const eventPlace = getTags(node.tree, 'PLAC')[0]

    if (eventDate) o.date = eventDate.data
    if (eventPlace) o.place = eventPlace.data
  }

  return o
}

function getEvent (el, type) {
  const event = getEventData(el, type)
  const target = []

  if (event && event !== undefined) {
    target.push(event)
  }
  return target
}

export default getEvent
