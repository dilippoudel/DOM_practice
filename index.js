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

//   Assignment 5
/* 
     1.Select the section with id container using all possible id related methods
     
     2.Select all of the list items with a class of 'second'
     3.Select list items of class 'third' inside ol tag
     4.Give the section with id 'container' the text 'Hi from container'
     5.Add the 'main' class to the div with class footer
     6.Remove the class main on the div with class footer
     7.Create new li element, with class and text 'four' and append it to ul tag
     8.Provide background color to all the li elemenst inside the ol tag
     9.Remove the div with a class of footer
  
      */
//  que 1
let container_selected_first = document.getElementById('container')
let container_selected_second = document.querySelector('#container')
// que 2
let secondClassElement_first_way = document.querySelectorAll('.second')
let secondClassElement_second_way = document.getElementsByClassName('second')
console.log(secondClassElement_second_way)
// que 3
let third_li_items_inside_ol_tag = document.querySelector('ol > .third')
console.log(third_li_items_inside_ol_tag)
// que 4
let newParaEle = document.createElement('p')
newParaEle.innerText = 'Hi From Container'
container_selected_first.appendChild(newParaEle)

// que 5
// adding new class
let footer = document.querySelector('.footer').classList
footer.add('main')
console.log(footer)
// que 6
// removing new class
footer.remove('main')
console.log(footer)
// que 7

let tag = document.querySelector('ul')
let li = document.createElement('li')
li.classList.add('four')
li.textContent = 'four'
tag.appendChild(li)
console.log(tag)

// que 8
let allLiTags = document.querySelectorAll('ol > li')
allLiTags.forEach((a) => {
  a.style.backgroundColor = 'green'
  a.style.marginTop = '5px' // this is just to separate each li tags for coloring purpose
})
console.log(allLiTags)
// allLiTags.style.backgroundColor = 'yellow'
console.log(allLiTags)

// que 9
footer.remove('footer')
