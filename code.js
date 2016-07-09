// call the start function
start();

// find all elements with classname "buttons", and invoke 'addListener' function to them
function start() {
  var x = document.getElementsByClassName("buttons");
  for (var i = 0; i < x.length; i++) {
    addListeners(x[i]);
  }
}

// on element being clicked, call 'capture' function
function addListeners(element) {
  element.addEventListener('click', capture);
}

// capture user input: which button is pressed
function capture(element) {
  var input = element.target.innerHTML;
  screenDisplay(input);
}

// create variable output
var output = null;

// handle user input, including special cases and send to screen
function screenDisplay(input) {
  if (input == 'Ans') {
    resolver(output);
    return;
  }

  else if (input == 'AC' || input == 'CA') {
    output = null;
  }

  else if (input == 'CE') {
    var len = output.length; len--;
    output = output.slice(0, len);
  }

  else if (output == null) {
    output = input;
  }

  else {
    output += input;
  }

  document.getElementById("screen").innerHTML = output;
}

// evaluate mathematical expression when user presses 'Ans' key
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
  output = null;
}
