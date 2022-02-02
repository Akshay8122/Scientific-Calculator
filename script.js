let random = document.getElementById("x^2");
let randomvar = document.getElementById("2");
let randompow = document.getElementById("10x");
let randomlog = document.getElementById("ln");

function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}
function getOutput() {
  return document.getElementById("output-value").innerText;
}
function printOutput(num) {
  if (num == "") {
    y.innerText = num;
  } else {
    y.innerText = getFormat(num);
  }
}
function getFormat(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substring(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output !== "" || output === "" || history !== "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (!isNaN(output)) {
      //if output is a number
      output = output + this.id;
      printOutput(output);
    }
  });
}
const y = document.getElementById("output-value");
function sin() {
  y.innerText = Math.sin(y.innerText);
  console.log(y);
}
function cos() {
  y.innerText = Math.cos(y.innerText);
}
function tan() {
  y.innerText = Math.tan(y.innerText);
}
function trigo() {
  var x = document.getElementById("fun");
  switch (x.value) {
    case "sin":
      sin();
      break;

    case "cos":
      cos();
      break;

    case "tan":
      tan();
      break;

    default:
      y = 0;
      break;
  }
}
function floor() {
  y.innerText = Math.floor(y.innerText);
}
function ceil() {
  y.innerText = Math.ceil(y.innerText);
}
function mathf() {
  x = document.getElementById("fun2");
  switch (x.value) {
    case "floor":
      floor();
      break;

    case "ceil":
      ceil();
      break;

    default:
      y = 0;
      break;
  }
}
function exp() {
  y.innerText = Math.exp(y.innerText);
}
function PI() {
  y.innerText = Math.PI;
}
function E() {
  y.innerText = Math.E;
}
function pow() {
  if (y.innerText !== "0" && y.innerText !== "") {
    if (random.innerText == "x2") {
      y.innerText = Math.pow(parseInt(y.innerText), 2);
    } else {
      y.innerText = Math.pow(parseInt(y.innerText), 3);
    }
  }
}
function sqrt() {
  if (y.innerText !== "0" && y.innerText !== "") {
    if (randomvar.innerHTML == "<sup>2</sup>√x") {
      y.innerText = Math.sqrt(y.innerText);
    } else {
      y.innerText = Math.cbrt(y.innerText);
    }
  }
}
function tanpow() {
  if (y.innerText !== "0" && y.innerText !== "") {
    if (randompow.innerHTML == "10<sup>x</sup>") {
      y.innerText = Math.pow(10, parseInt(y.innerText));
    } else {
      y.innerText = Math.pow(2, parseInt(y.innerText));
    }
  }
}
function log() {
  if (y.innerText !== "0" && y.innerText !== "") {
    y.innerText = Math.log10(y.innerText);
  }
}
function lnlog() {
  if (y.innerText !== "0" && y.innerText !== "") {
    if (randomlog.innerText == "ln") {
      y.innerText = Math.log(y.innerText);
    } else {
      y.innerText = Math.E ** y.innerText;
    }
  }
}
function rational() {
  if (y.innerText !== "0" && y.innerText !== "") {
    y.innerText = 1 / parseInt(y.innerText);
  }
}
function factorial(n = y.innerText) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    printOutput(answer);
  }
}
function exponentiation() {
  if (y.innerText !== "0" && y.innerText !== "") {
    var a = (y.innerText += "**");
    printOutput("");
    printHistory(a);
  }
}
function scientific_nota() {
  if (y.innerText !== "0" && y.innerText !== "") {
    var x = y.innerText;
    var a = parseInt(x).toExponential();
    printOutput("");
    printHistory(a);
  }
}
function modx() {
  if (y.innerText !== "0" && y.innerText !== "") {
    y.innerText = 0 - parseInt(y.innerText);
  }
}
function ms() {
  if (y.innerText !== "0" && y.innerText !== "") {
    mv.unshift(parseInt(y.innerText));
    document.getElementById("memory-value").innerText = mv;
  }
}
var mv = [];
function mp() {
  if (mv[0]) {
    y.innerText = mv[0] + parseInt(y.innerText);
  }
}
function mm() {
  if (mv[0]) {
    y.innerText = mv[0] - parseInt(y.innerText);
  }
}
function mc() {
  document.getElementById("memory-value").innerText = "";
  mv = [];
}
function mr() {
  if (y.innerText !== "0" && y.innerText !== "") {
    y.innerText += mv[0];
  }
}
const deg_rad = () => {
  var val = document.getElementById("deg");
  var convert = parseInt(y.innerText);
  if (y.innerText !== "0" && y.innerText !== "") {
    if (val.innerText === "DEG") {
      val.innerText = "RAD";
      console.log(val.innerText);
      y.innerText = convert * (180 / Math.PI);
    } else {
      val.innerText = "DEG";
      y.innerText = convert * (Math.PI / 180);
      console.log(val.innerText);
    }
  }
};
let valid = true;
function ChangeAll() {
  if (valid) {
    (random.innerHTML = "x<sup>3</sup>"),
      (randomvar.innerHTML = "<sup>3</sup>√x"),
      (randompow.innerHTML = "2<sup>x</sup>"),
      (randomlog.innerHTML = "e<sup>x</sup>");
    valid = false;
  } else {
    valid = true;
    (random.innerHTML = "x<sup>2</sup>"),
      (randomvar.innerHTML = "<sup>2</sup>√x"),
      (randompow.innerHTML = "10<sup>x</sup>"),
      (randomlog.innerHTML = "ln");
  }
}
