// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// algo

function updateInventory(currentArr, newArr) {
    // All inventory must be accounted for or you're fired!
    let finalArr = []

    function updateItem(name, newItem) {
      const item = currentArr.filter(item => item[1] === name)
      console.log(item)

      item[0] += newItem[0]
      console.log(item, 16)

      return item
    }

    function addItem(item, arr) {
      arr.push(item)
    }

    const currentInvNames = currentArr.map(item => item[1])
    console.log(currentInvNames)

    newArr.forEach(newItem => {

      if (currentInvNames.includes(newItem[1])) {
        const item = updateItem(newItem[1], newItem)
        
      } else {
        addItem(newItem, currentArr) 
      }

      console.log(currentArr, 43)
    })
  return currentArr
    
}

// Example inventory lists
var currentInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));