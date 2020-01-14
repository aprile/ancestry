import readGedcom from './gedcom-reader'
import gedcomTranslate from './translator'

const inputFile = document.querySelector('#file-input')

inputFile.addEventListener('change', (event) => {
  readFile(event.target)
})

function readFile (input) {
  const file = input.files[0]
  const reader = new window.FileReader()
  const displayResult = document.querySelector('.result')

  reader.readAsText(file)

  reader.onerror = function () {
    displayResult.textContent = 'Error'
  }

  reader.onload = function () {
    const output = reader.result

    const o = readGedcom(output)
    const display = gedcomTranslate(o)
    displayResult.textContent = display
  }
}
