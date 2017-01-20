// Create variables
var roots = { size: 0, char: 0 };

// Get a reference to the button elements in the DOM
var button = document.getElementById('growButton');
var reload = document.getElementById('clearButton');

// Function to grow the tree
function tree(roots) {
  var treeHeight = parseInt(document.getElementById('tree-height').value);
  var charToUse = document.getElementById('char-used').value;
  roots.size = treeHeight;
  roots.char = charToUse;
  var numOfChars = 1;
  var numOfSpaces = roots.size - 1;
  if (roots.size > 0 && roots.char.length === 1) {
    for (var i = 0; i < roots.size; i++) {
      var spaces = ' '.repeat(numOfSpaces);
      var character = roots.char.repeat(numOfChars);
      var treeDoIt = spaces + character;
      console.log(treeDoIt);
      numOfSpaces -= 1;
      numOfChars += 2;
    }
  } else {
      alert('Please enter a value for both fields.')
  }
}

// Function to reset form and reload page if clear all button is pushed
function clear() {
  window.location.reload();
}

// When button is clicked then runs function to grow tree or clear function
button.addEventListener('click', tree);
reload.addEventListener('click', clear);

// When enter is pressed calls back to button click event handler;
document.getElementById('tree-height').onkeypress = function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    var pressedEnter = document.getElementById('growButton').click();
  }
};

document.getElementById('char-used').onkeypress = function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    var pressedEnter = document.getElementById('growButton').click();
  }
};

tree(roots);
