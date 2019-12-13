// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// algo

function updateInventory(currentArr, newArr) {
    // All inventory must be accounted for or you're fired!
    function updateItem(name, newItem) {
      const updatedArr = currentArr.map(item => {
        if (item[1] === name) {
          item[0] += newItem[0]
          return item
        } else {
          return item
        }
        })

      return updatedArr
    }

    const currentInvNames = currentArr.map(item => item[1])
    console.log(currentInvNames)

    newArr.forEach(newItem => {


      if (currentInvNames.includes(newItem[1])) {
        console.log(updateItem(newItem[1], newItem), 27)
      }
    })

    
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

console.log(updateInventory(currentInv, newInv));