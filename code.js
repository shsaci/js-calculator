start();

function start() {
  var x = document.getElementsByClassName("buttons");
  for (var i = 0; i < x.length; i++) {
    addListeners(x[i]);
  }
}

function addListeners(element) {
  element.addEventListener('click', capture);
}

function capture(element) {
  var input = element.target.innerHTML;
  // console.log(input);
  screenDisplay(input);
}

var output = null;

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
    // console.log(output.length);
    output = output.slice(0, len);
  }

  else if (output == null) {
    output = input;
  }

  else {
    output += input;
  }

  // console.log(output);
  document.getElementById("screen").innerHTML = output;
}

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
