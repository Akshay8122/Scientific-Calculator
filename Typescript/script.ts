let random = document.getElementById("x^2")! as HTMLInputElement;
let randomvar = document.getElementById("2")! as HTMLInputElement;
let randompow = document.getElementById("10x")! as HTMLInputElement;
let randomlog = document.getElementById("ln")! as HTMLInputElement;

function getHistory(): string {
  return document.getElementById("history-value")!.innerText;
}
function printHistory(num: string) {
  document.getElementById("history-value")!.innerText = num;
}
function getOutput() {
  return document.getElementById("output-value")!.innerText;
}
function printOutput(num: string) {
  if (num == "") {
    display.innerText = num;
  } else {
    display.innerText = getFormat(num);
  }
}
function getFormat(num: string) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num: string) {
  return Number(num.replace(/,/g, ""));
}
let operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    let temp = (<HTMLInputElement>e.target);
    if (temp.id === "clear") {
      printHistory("");
      printOutput("");
    } else if (temp.id === "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substring(0, output.length - 1);
        printOutput(output);
      }
    } else {
      let output: number | string | boolean = getOutput();
      let history: string = getHistory();
      if (output !== "" || output === "" || history !== "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (display.innerText !== "0" && display.innerText !== "") {
          if (temp.id === "=") {
            var result = eval(history);
            printOutput(result);
            printHistory("");
          } else {
            history = history + temp.id;
            printHistory(history);
            printOutput("");
          }
        }
      }
    }
  });
}
let number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    let temp = (<HTMLInputElement>e.target);
    let output: number | boolean | string = reverseNumberFormat(getOutput());
    if (!isNaN(output)) {
      //if output is a number
      output = output + temp.id;
      printOutput(output);
    }
  });
}

let display = document.getElementById("output-value")! as HTMLInputElement;
function sin() {
  display.innerText = String(Math.sin(Number(display.innerText)));
}
function cos() {
  display.innerText = String(Math.cos(Number(display.innerText)));
}
function tan() {
  display.innerText = String(Math.tan(Number(display.innerText)));
}
function trigo() {
  let x = document.getElementById("fun")! as HTMLInputElement;
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
      display.innerText = "0";
      break;
  }
}
function floor() {
  display.innerText = String(Math.floor(Number(display.innerText)));
}
function ceil() {
  display.innerText = String(Math.ceil(Number(display.innerText)));
}
function mathf() {
  let check = document.getElementById("fun2")! as HTMLInputElement;
  switch (check.value) {
    case "floor":
      floor();
      break;

    case "ceil":
      ceil();
      break;

    default:
      display.innerText = "0";
      break;
  }
}
function exp() {
  display.innerText = String(Math.exp(Number(display.innerText)));
}
function PI() {
  display.innerText = String(Math.PI);
}
function E() {
  display.innerText = String(Math.E);
}
function pow() {
  if (display.innerText !== "0" && display.innerText !== "") {
    if (random.innerText == "x2") {
      display.innerText = String(Math.pow(parseInt(display.innerText), 2));
    } else {
      display.innerText = String(Math.pow(parseInt(display.innerText), 3));
    }
  }
}
function sqrt() {
  if (display.innerText !== "0" && display.innerText !== "") {
    if (randomvar.innerHTML == "<sup>2</sup>√x") {
      display.innerText = String(Math.sqrt(Number(display.innerText)));
    } else {
      display.innerText = String(Math.cbrt(Number(display.innerText)));
    }
  }
}
function tanpow() {
  if (display.innerText !== "0" && display.innerText !== "") {
    if (randompow.innerHTML == "10<sup>x</sup>") {
      display.innerText = String(Math.pow(10, parseInt(display.innerText)));
    } else {
      display.innerText = String(Math.pow(2, parseInt(display.innerText)));
    }
  }
}
function log() {
  if (display.innerText !== "0" && display.innerText !== "") {
    display.innerText = String(Math.log10(Number(display.innerText)));
  }
}
function lnlog() {
  if (display.innerText !== "0" && display.innerText !== "") {
    if (randomlog.innerText == "ln") {
      display.innerText = String(Math.log(Number(display.innerText)));
    } else {
      display.innerText = String(Math.E ** Number(display.innerText));
    }
  }
}
function rational() {
  if (display.innerText !== "0" && display.innerText !== "") {
    display.innerText = String(1 / parseInt(display.innerText));
  }
}
const factorial = () => {
  let fact = 1;
  let num = Number(display.innerText);
  console.log(fact);
  for (let i = 1; i <= num; i++) {
    fact *= i;
    console.log(fact);
  }
  display.innerText = String(fact);
}
function exponentiation() {
  if (display.innerText !== "0" && display.innerText !== "") {
    let a: string = (display.innerText += "**");
    printOutput("");
    printHistory(a);
  }
}
function scientific_nota() {
  if (display.innerText !== "0" && display.innerText !== "") {
    let x: string = display.innerText;
    let a: string = parseInt(x).toExponential();
    printOutput("");
    printHistory(a);
  }
}

let mv: number[] = [];
function modx() {
  if (display.innerText !== "0" && display.innerText !== "") {
    display.innerText = String(0 - parseInt(display.innerText));
  }
}
function ms() {
  if (display.innerText !== "0" && display.innerText !== "") {
    mv.unshift(Number(display.innerText));
    let z = document.getElementById("memory-value")! as HTMLInputElement;
    z.innerText = String(mv);
  }
}
function mp() {
  if (mv[0]) {
    display.innerText = String(mv[0] + parseInt(display.innerText));
  }
}
function mm() {
  if (mv[0]) {
    display.innerText = String(mv[0] - parseInt(display.innerText));
  }
}
function mc() {
  let z = document.getElementById("memory-value")! as HTMLInputElement;
  z.innerText = "";
  mv = [];
}
function mr() {
  if (display.innerText !== "0" && display.innerText !== "") {
    display.innerText += mv[0];
  }
}
const deg_rad = () => {
  let val = document.getElementById("deg")! as HTMLInputElement;
  let convert: number = parseInt(display.innerText);
  if (display.innerText !== "0" && display.innerText !== "") {
    if (val.innerText === "DEG") {
      val.innerText = "RAD";
      console.log(val.innerText);
      display.innerText = String(convert * (180 / Math.PI));
    } else {
      val.innerText = "DEG";
      display.innerText = String(convert * (Math.PI / 180));
      console.log(val.innerText);
    }
  }
};
let valid: boolean = true;
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
