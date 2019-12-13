// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// algo

function updateInventory(currentArr, newArr) {
    // All inventory must be accounted for or you're fired!
    function findItem(name) {
      item = currentArr
    }

    const currentInvNames = currentArr.map(item => item[1])
    console.log(currentInvNames)

    newArr.forEach(item => {
      currentItemIndex = findItem(item[1])
      
      if (currentInvNames.includes(item[1])) {
        currentArr[0] = currentArr[0] + item[0] 
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