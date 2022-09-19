// printing the value of form
let elements = document.getElementsByName('firstName')
console.log(elements[0].value)
console.log(elements[1].value)

// create a function to add new rows to the table
function addNewRows() {
  let tableElement = document.querySelector('#newTable>tbody')
  let newRow = tableElement.insertRow()
  newRow.insertCell(0).append('New Cell')
  newRow.insertCell(1).append('New Cell')
}
const btnElement = document.getElementById('btn')
btnElement.addEventListener('click', addNewRows)
