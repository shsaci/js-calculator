// find all buttons on html page, and invoke addListener function on them
function start() {
  var x = document.getElementsByClassName("buttons");
  for (var i = 0; i < x.length; i++) {
    addListeners(x[i]);
  }
}

start();

// listen for click events on all buttons, and call the capture function
// if button clicked
function addListeners(element) {
  element.addEventListener('click', capture);
}

// capture the incoming user input on calculator buttons
// also handle special buttons like AC, CA, CE
function capture(element) {
  var input = element.target.innerHTML;
  var output = document.getElementById("screen").innerHTML;

  switch (input) {
    case 'Ans': {
      resolver(output);
      output = "";
    }
    break;
    case 'AC':
    reset();
    break;
    case 'CA':
    reset();
    break;
    case 'CE':
    deleteLastCharOf(output);
    break;
    default: {
      output += input;
      screenDisplay(output);
    }
  }
}

// the sole role of this function is to display the provided value to
//the calculator screen
function screenDisplay(output){
  document.getElementById("screen").innerHTML = output;
}

// this function evaluates the mathematical expression provided to do it
// with the help of math.js library via cdnjs
function resolver(str) {
  if (str.length == 0) {
    result = 0;
  }

  else {
    var node1 = math.parse(str);
    var code1 = node1.compile();
    var result = code1.eval();
  }

  result = Number(result.toFixed(10));
  document.getElementById("screen").innerHTML = result;
}

// clear screen and any current calculations in memory
function reset() {
  output = "";
  screenDisplay(output);
}

// return current expression sans last character in expression
function deleteLastCharOf(str) {
  if (str.length <= 0) {
    reset();
  }

  else {
    var len = str.length; len--;
    str = str.slice(0, len);
    screenDisplay (str);
  }
}
