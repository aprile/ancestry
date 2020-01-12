import getByTag from './mixins/getByTag'

const gedcom = require('parse-gedcom')
const input = `
  0 HEAD
  1 SOUR webtreeprint.com
  2 VERS 1.0
  2 NAME webtreeprint
  1 FILE shakespeare.ged
  1 GEDC
  2 VERS 5.5.1
  2 FORM LINEAGE-LINKED
  1 CHAR UTF-8
  1 SUBM @SUB1@
  0 @SUB1@ SUBM
  1 NAME webTreePrint
  0 @I0001@ INDI
  1 NAME William /Shakespeare/
  2 GIVN William
  2 SURN Shakespeare
  1 SEX M
  1 BIRT
  2 DATE BEF 23 APR 1564
  2 PLAC Stratford-upon-Avon
  1 CHR
  2 DATE 26 APR 1564
  2 PLAC Stratford-upon-Avon
  1 DEAT
  2 DATE 23 APR 1616
  2 PLAC Stratford-upon-Avon
  1 FAMC @F001@
  1 FAMS @F002@
  0 @I0002@ INDI
  1 NAME Mary /Arden/
  2 GIVN Mary
  2 SURN Arden
  1 SEX F
  1 BIRT
  2 DATE ABT 1537
  1 DEAT
  2 DATE SEP 1608
  1 FAMC @F005@
  1 FAMS @F001@
  0 @I0003@ INDI
  1 NAME John /Shakespeare/
  2 GIVN John
  2 SURN Shakespeare
  1 SEX M
  1 BIRT
  2 DATE ABT 1531
  1 DEAT
  2 DATE 07 SEP 1601
  1 BURI
  2 DATE 08 SEP 1601
  1 FAMC @F003@
  1 FAMS @F001@
  0 @I0004@ INDI
  1 NAME Anne /Hathaway/
  2 GIVN Anne
  2 SURN Hathaway
  1 SEX F
  1 BIRT
  2 DATE APR 1556
  2 PLAC Shottery, Warwickshire
  1 DEAT
  2 DATE 06 AUG 1623
  2 PLAC Stratford-upon-Avon
  1 FAMC @F010@
  1 FAMS @F002@
  0 @I0005@ INDI
  1 NAME Susanna /Shakespeare/
  2 GIVN Susanna
  2 SURN Shakespeare
  1 SEX F
  1 BIRT
  2 DATE MAY 1583
  2 PLAC Stratford-upon-Avon
  1 CHR
  2 DATE 26 MAY 1583
  2 PLAC Stratford-upon-Avon
  1 DEAT
  2 DATE 11 JUL 1649
  2 PLAC Stratford-upon-Avon
  1 FAMC @F002@
  1 FAMS @F006@
  0 @I0006@ INDI
  1 NAME Hamnet /Shakespeare/
  2 GIVN Hamnet
  2 SURN Shakespeare
  1 SEX M
  1 BIRT
  2 DATE JAN 1585
  2 PLAC Stratford-upon-Avon
  1 CHR
  2 DATE 02 FEB 1585
  2 PLAC Stratford-upon-Avon
  1 DEAT
  2 DATE AUG 1596
  2 PLAC Stratford-upon-Avon
  1 BURI
  2 DATE 11 AUG 1596
  2 PLAC Stratford-upon-Avon
  1 FAMC @F002@
  0 @I0007@ INDI
  1 NAME Judith /Shakespeare/
  2 GIVN Judith
  2 SURN Shakespeare
  1 SEX F
  1 BIRT
  2 DATE JAN 1585
  2 PLAC Stratford-upon-Avon
  1 CHR
  2 DATE 02 FEB 1585
  2 PLAC Stratford-upon-Avon
  1 DEAT
  2 DATE FEB 1662
  2 PLAC Stratford-upon-Avon
  1 BURI
  2 DATE 09 FEB 1662
  2 PLAC Stratford-upon-Avon
  1 FAMC @F002@
  1 FAMS @F009@
  0 @I0008@ INDI
  1 NAME Joan /Shakespeare/
  2 GIVN Joan
  2 SURN Shakespeare
  1 SEX F
  1 BIRT
  2 DATE SEP 1558
  1 CHR
  2 DATE 15 SEP 1558
  1 DEAT
  2 DATE AFT SEP 1558
  1 FAMC @F001@
  0 @I0009@ INDI
  1 NAME Margaret /Shakespeare/
  2 GIVN Margaret
  2 SURN Shakespeare
  1 SEX F
  1 BIRT
  2 DATE NOV 1562
  1 CHR
  2 DATE 02 DEC 1562
  1 DEAT
  2 DATE APR 1563
  1 BURI
  2 DATE 30 APR 1563
  1 FAMC @F001@
  0 @I0010@ INDI
  1 NAME Gilbert /Shakespeare/
  2 GIVN Gilbert
  2 SURN Shakespeare
  1 SEX M
  1 BIRT
  2 DATE OCT 1566
  1 DEAT
  2 DATE JAN 1612
  1 FAMC @F001@
  0 @I0011@ INDI
  1 NAME Joan /Shakespeare/
  2 GIVN Joan
  2 SURN Shakespeare
  1 SEX F
  1 BIRT
  2 DATE APR 1569
  1 DEAT
  2 DATE NOV 1646
  1 FAMC @F001@
  0 @I0012@ INDI
  1 NAME Anne /Shakespeare/
  2 GIVN Anne
  2 SURN Shakespeare
  1 SEX F
  1 BIRT
  2 DATE SEP 1571
  1 DEAT
  2 DATE APR 1579
  1 FAMC @F001@
  0 @I0013@ INDI
  1 NAME Richard /Shakespeare/
  2 GIVN Richard
  2 SURN Shakespeare
  1 SEX M
  1 BIRT
  2 DATE MAR 1574
  1 DEAT
  2 DATE FEB 1613
  1 FAMC @F001@
  0 @I0014@ INDI
  1 NAME Edmund /Shakespeare/
  2 GIVN Edmund
  2 SURN Shakespeare
  1 SEX M
  1 BIRT
  2 DATE APR 1580
  1 DEAT
  2 DATE DEC 1607
  1 FAMC @F001@
  0 @I0015@ INDI
  1 NAME Richard /Shakespeare/
  2 GIVN Richard
  2 SURN Shakespeare
  1 SEX M
  1 BIRT
  2 DATE ABT 1490
  1 DEAT
  2 DATE BEF 10 FEB 1561
  1 FAMS @F003@
  0 @I0016@ INDI
  1 NAME Henry /Shakespeare/
  2 GIVN Henry
  2 SURN Shakespeare
  1 SEX M
  1 DEAT
  2 DATE 1596
  1 FAMC @F003@
  1 FAMS @F004@
  0 @I0017@ INDI
  1 NAME Margaret //
  2 GIVN Margaret
  1 SEX F
  1 DEAT
  2 DATE 1597
  1 FAMS @F004@
  0 @I0018@ INDI
  1 NAME Agnes /Webbe/
  2 GIVN Agnes
  2 SURN Webbe
  1 SEX F
  1 FAMS @F005@
  0 @I0019@ INDI
  1 NAME Robert /Arden/
  2 GIVN Robert
  2 SURN Arden
  1 SEX M
  1 DEAT
  2 DATE DEC 1556
  1 FAMS @F005@
  0 @I0020@ INDI
  1 NAME John /Hall/
  2 GIVN John
  2 SURN Hall
  1 TITL Dr.
  1 SEX M
  1 BIRT
  2 DATE 1575
  1 DEAT
  2 DATE NOV 1635
  1 FAMS @F006@
  0 @I0021@ INDI
  1 NAME Elizabeth /Shakespeare/
  2 GIVN Elizabeth
  2 SURN Shakespeare
  1 SEX F
  1 BIRT
  2 DATE FEB 1608
  1 CHR
  2 DATE 21 FEB 1608
  2 PLAC Stratford-upon-Avon
  1 DEAT
  2 DATE FEB 1670
  1 FAMC @F006@
  1 FAMS @F007@
  1 FAMS @F008@
  0 @I0022@ INDI
  1 NAME Thomas /Nash/
  2 GIVN Thomas
  2 SURN Nash
  1 SEX M
  1 BIRT
  2 DATE 1593
  1 DEAT
  2 DATE APR 1647
  1 FAMS @F007@
  0 @I0023@ INDI
  1 NAME John /Barnard/
  2 GIVN John
  2 SURN Barnard
  1 TITL Sir
  1 SEX M
  1 DEAT
  2 DATE 1674
  1 FAMS @F008@
  0 @I0024@ INDI
  1 NAME Thomas /Quiney/
  2 GIVN Thomas
  2 SURN Quiney
  1 SEX M
  1 BIRT
  2 DATE 1589
  1 DEAT
  2 DATE ABT 1655
  1 FAMS @F009@
  1 FAMS @F011@
  0 @I0025@ INDI
  1 NAME Shakespeare /Quiney/
  2 GIVN Shakespeare
  2 SURN Quiney
  1 SEX M
  1 BIRT
  2 DATE NOV 1616
  1 CHR
  2 DATE 23 NOV 1616
  1 DEAT
  2 DATE MAY 1617
  1 BURI
  2 DATE 08 MAY 1617
  1 FAMC @F009@
  0 @I0026@ INDI
  1 NAME Richard /Quiney/
  2 GIVN Richard
  2 SURN Quiney
  1 SEX M
  1 BIRT
  2 DATE FEB 1618
  1 CHR
  2 DATE 09 FEB 1618
  1 DEAT
  2 DATE FEB 1639
  1 BURI
  2 DATE 06 FEB 1639
  1 FAMC @F009@
  0 @I0027@ INDI
  1 NAME Thomas /Quiney/
  2 GIVN Thomas
  2 SURN Quiney
  1 SEX M
  1 BIRT
  2 DATE JAN 1620
  1 CHR
  2 DATE 23 JAN 1620
  1 DEAT
  2 DATE JAN 1639
  1 BURI
  2 DATE 28 JAN 1639
  1 FAMC @F009@
  0 @I0028@ INDI
  1 NAME Richard /Hathaway/
  2 GIVN Richard
  2 SURN Hathaway
  1 SEX M
  1 DEAT
  2 DATE SEP 1581
  1 FAMS @F010@
  0 @I0029@ INDI
  1 NAME Margaret /Wheeler/
  2 GIVN Margaret
  2 SURN Wheeler
  1 SEX F
  1 DEAT
  2 PLAC Died in childbirth
  1 BURI
  2 DATE 15 MAR 1616
  1 FAMS @F011@
  0 @I0030@ INDI
  1 NAME Not named /Quiney/
  2 GIVN Not named
  2 SURN Quiney
  1 SEX
  1 DEAT
  2 PLAC Died in childbirth
  1 BURI
  2 DATE 15 MAR 1616
  1 FAMC @F011@
  0 @I0031@ INDI
  1 NAME  /Unknown/
  2 SURN Unknown
  1 SEX F
  1 FAMS @F003@
  0 @F001@ FAM
  1 HUSB @I0003@
  1 WIFE @I0002@
  1 MARR
  2 DATE ABT 1557
  1 CHIL @I0001@
  1 CHIL @I0008@
  1 CHIL @I0009@
  1 CHIL @I0010@
  1 CHIL @I0011@
  1 CHIL @I0012@
  1 CHIL @I0013@
  1 CHIL @I0014@
  0 @F002@ FAM
  1 HUSB @I0001@
  1 WIFE @I0004@
  1 MARR
  2 DATE NOV 1582
  1 CHIL @I0005@
  1 CHIL @I0006@
  1 CHIL @I0007@
  0 @F003@ FAM
  1 HUSB @I0015@
  1 WIFE @I0031@
  1 CHIL @I0016@
  1 CHIL @I0003@
  0 @F004@ FAM
  1 HUSB @I0016@
  1 WIFE @I0017@
  0 @F005@ FAM
  1 HUSB @I0019@
  1 WIFE @I0018@
  1 CHIL @I0002@
  0 @F006@ FAM
  1 HUSB @I0020@
  1 WIFE @I0005@
  1 MARR
  2 DATE 05 JUN 1607
  2 PLAC Stratford-upon-Avon
  1 CHIL @I0021@
  0 @F007@ FAM
  1 HUSB @I0022@
  1 WIFE @I0021@
  1 MARR
  2 DATE 1626
  0 @F008@ FAM
  1 HUSB @I0023@
  1 WIFE @I0021@
  1 MARR
  2 DATE 1649
  0 @F009@ FAM
  1 HUSB @I0024@
  1 WIFE @I0007@
  1 MARR
  2 DATE 10 FEB 1616
  2 PLAC Stratford-upon-Avon
  1 CHIL @I0025@
  1 CHIL @I0026@
  1 CHIL @I0027@
  0 @F010@ FAM
  1 HUSB @I0028@
  1 CHIL @I0004@
  0 @F011@ FAM
  1 HUSB @I0024@
  1 WIFE @I0029@
  1 MARR
  2 PLAC Unmarried
  1 CHIL @I0030@
  0 TRLR
`

const parseGedcom = JSON.stringify(gedcom.parse(input), null, 2)
const obj = JSON.parse(parseGedcom)

obj.forEach(el => console.log(el))

function getDataByType (el, type) {
  if (!el.tree) return
  const node = getByTag(el.tree, String(type))[0]
  const o = {}

  if (node) o.data = node.data
  return o
}

function getNames (el) {
  if (!el.tree) return

  const node = getByTag(el.tree, 'NAME')[0]
  const o = {}

  if (node) o.data = node.data

  if (node && node.tree) {
    const firstName = getByTag(node.tree, 'GIVN')[0]
    if (firstName) o.givn = firstName.data

    const lastName = getByTag(node.tree, 'SURN')[0]
    if (lastName) o.surn = lastName.data
  }
  return o
}

function getEvent (el, type) {
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

function createEntry (el) {
  const o = {
    id: el.pointer || '',
    tag: el.tag
  }

  function getData (el, type) {
    const data = getDataByType(el, type)
    if (data) return data
  }

  function getChildren (el) {
    const children = []
    const newchild = el.tree.filter(function (child) {
      return child.tag === 'CHIL'
    })

    children.push(newchild)
    return children
  }

  function pushEvent (type) {
    const event = getEvent(el, type)
    const target = []

    if (event && event !== undefined) {
      target.push(event)
    }
    return target
  }

  if (el.tag === 'FAM') {
    o.husb = getData(el, 'HUSB')
    o.wife = getData(el, 'WIFE')
    o.marr = pushEvent('MARR')
    o.children = getChildren(el)
  }

  if (el.tag === 'INDI') {
    o.name = getNames(el)
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

  console.log('*************', target)
}

getIndividuals()
