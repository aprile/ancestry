import getByTag from './getByTag'

const getDataByType = (el, type) => {
  if (!el.tree) return
  const node = getByTag(el.tree, String(type))[0]
  const o = {}

  if (node) o.data = node.data
  return o
}

export default getDataByType
