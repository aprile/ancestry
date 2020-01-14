import getTags from './getTags'

function getDataByType (el, type) {
  if (!el.tree) return

  const node = getTags(el.tree, String(type))[0]
  const o = {}

  if (node) o.data = node.data
  return o
}

//
// Get single data entry for specified type
//
function getData (el, type) {
  const data = getDataByType(el, type)

  if (data) {
    return data
  }
}

export default (getDataByType, getData)
