function formatDate (date) {
  let result = ''

  if (date.match(/BEF/)) date = date.replace(/BEF/, 'before')
  else if (date.match(/ABT/)) date = date.replace(/ABT/, 'about')
  else if (date.match(/AFT/)) date = date.replace(/AFT/, 'after')

  if (date.match(/JAN/)) date = date.replace(/JAN/, 'January')
  if (date.match(/FEB/)) date = date.replace(/FEB/, 'February')
  if (date.match(/MAR/)) date = date.replace(/MAR/, 'March')
  if (date.match(/APR/)) date = date.replace(/APR/, 'April')
  if (date.match(/MAY/)) date = date.replace(/MAY/, 'May')
  if (date.match(/JUN/)) date = date.replace(/JUN/, 'June')
  if (date.match(/JUL/)) date = date.replace(/JUL/, 'July')
  if (date.match(/AUG/)) date = date.replace(/AUG/, 'August')
  if (date.match(/SEP/)) date = date.replace(/SEP/, 'September')
  if (date.match(/OCT/)) date = date.replace(/OCT/, 'October')
  if (date.match(/NOV/)) date = date.replace(/NOV/, 'November')
  if (date.match(/DEC/)) date = date.replace(/DEC/, 'December')

  result = date

  return result
}

export default formatDate
