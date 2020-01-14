function getTags (data, tag) {
  const tags = data.filter(el => el.tag === tag)

  if (tags.length > 0) {
    return tags.map(el => {
      const result = {}

      if (el.data) {
        result.data = el.data
      }

      if (el.tree && el.tree.length > 0) {
        result.tree = el.tree
      }

      return result
    })
  }
  return []
}

export default getTags
