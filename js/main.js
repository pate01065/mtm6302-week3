// Accessing document property
console.log(document.title)

// finding an element by id
const infoPara = document.getElementById("info")
console.log(infoPara)
console.dir(infoPara) // if console.log()  shows us the string version of the object we can use console.dir() method

// additional assignment to the textcontent property of infopass
infoPara.textContent += "Dhruti"

//finding an element using CSS selector
let container = document.querySelector(".container")
console.log(container)

// using style object of an element
container.style.maxWidth = "800px"
container.style.margin = "0 auto"

// finding all the elements using CSS selectors
let allNodes = document.querySelectorAll(".type")
console.log(allNodes)

// accessing the element on second position and setting its style.background
allNodes[1].style.background = "yellow"

// looping through the allNodes array and assingning style.border to each item
for(let eachNode of allNodes){
    eachNode.style.border = "1px solid black"
}

/* Travesting the Dom */

// finding the element by ID
const mainNodes = document.getElementById("threeNodes")
console.log(mainNodes)

// accessing the children property of the mainNodes variable
const listOfNodes = mainNodes.children

// selecting the second item and setting its style
listOfNodes[1].style.margin = "10px 0"

const firstNode = mainNodes.firstElementChild
console.log(firstNode.textContent)

/* Attribute Method */
const learnMore = document.getElementById("learn")
// getting attribute value
console.log(learnMore.getAttribute("href"))
console.log(learnMore.getAttribute("class"))

// getting attribute value that is property like id by using the property name
console.log(learnMore.id)

//setting attribute vilue
learnMore.setAttribute("target", "_blank")

// adding a class using classlist
learnMore.classList.add("btn")

const fakeConsole = document.getElementById("box")
fakeConsole.setAttribute("style", `
background-color: powderblue;
padding: 10px;
border: 1px solid black;`)

fakeConsole.innerHTML += "<p>This is a fake console, where we are output our information</p>"
fakeConsole.innerHTML += " The above URL is" + learnMore.getAttribute("href")
fakeConsole.innerHTML += document.URL

