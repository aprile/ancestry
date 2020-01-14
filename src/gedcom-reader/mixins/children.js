function getChildren (el) {
  if (!el.tree) return

  const node = el.tree
  const children = []

  const child = node.filter(function (child) {
    return child.tag === 'CHIL'
  })

  children.push(child)
  return children
}

export default getChildren
