// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// algo

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    const currentInvNames = currentInv.map(item => item[1])
    console.log(currentInvNames)
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