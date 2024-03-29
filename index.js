// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// algo

function updateInventory(currentArr, newArr) {

  // testing alternate solutions

  const inventory = Array.prototype.concat.apply([], currentArr); 
  // converts to 1d array. apply calls a function with an array as the paramater values
  const inventory2 = [].concat.apply([], currentArr); // this is the same
  
  console.log(inventory, 'inventory')
  console.log(inventory2, 'inventory2')

  // loop through new delivery (arr2)

  // /test

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

    function addItem(item) {

      currentArr.push(item)

    }

    const currentInvNames = currentArr.map(item => item[1])

    newArr.forEach(newItem => {

      if (currentInvNames.includes(newItem[1])) {
        const item = updateItem(newItem[1], newItem)
        
      } else {
        addItem(newItem) 
      }

      console.log(currentArr, 43)
    })

    currentArr.sort(function(currentItem, nextItem) {
      return currentItem[1] > nextItem[1] ? 1 : -1
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