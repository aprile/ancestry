import readGedcom from './gedcom-reader'

const inputFile = document.querySelector('#file-input')
const displayResult = document.querySelector('.result')

inputFile.addEventListener('change', (event) => {
  readFile(event.target)
})

function readFile (input) {
  const file = input.files[0]
  const reader = new window.FileReader()

  reader.readAsText(file)

  reader.onload = function () {
    const output = reader.result
    readGedcom(output)
    displayResult.textContent = JSON.stringify(reader.result)
  }

  reader.onerror = function () {
    displayResult.textContent = 'Error'
  }
}
