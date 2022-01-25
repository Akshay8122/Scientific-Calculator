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
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormat(num);
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

// All operators
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                //if output has a value
                output = output.substring(0, output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output != "" || output == "" || history != "") {
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

// All numbers

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
        var output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            //if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}

//Trigonometry Functions

function sin() {
    document.getElementById("output-value").innerText = Math.sin(
        document.getElementById("output-value").innerText
    );
}

function cos() {
    document.getElementById("output-value").innerText = Math.cos(
        document.getElementById("output-value").innerText
    );
}

function sin() {
    document.getElementById("output-value").innerText = Math.tan(
        document.getElementById("output-value").innerText
    );
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
    }
}

//Math & Others Functions
function floor() {
    document.getElementById("output-value").innerText = Math.floor(
        document.getElementById("output-value").innerText
    );
}

function ceil() {
    document.getElementById("output-value").innerText = Math.ceil(
        document.getElementById("output-value").innerText
    );
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
    }
}

function exp() {
    document.getElementById("output-value").innerText = Math.exp(
        document.getElementById("output-value").innerText
    );
}

function PI() {
    document.getElementById("output-value").innerText = Math.PI;
}

function E() {
    document.getElementById("output-value").innerText = Math.E;
}

function pow() {
    document.getElementById("output-value").innerText = Math.pow(
        parseInt(document.getElementById("output-value").innerText),
        2
    );
}

function sqrt() {
    document.getElementById("output-value").innerText = Math.sqrt(
        document.getElementById("output-value").innerText
    );
}

function tanpow() {
    document.getElementById("output-value").innerText = Math.pow(
        10,
        parseInt(document.getElementById("output-value").innerText)
    );
}

function twopow() {
    document.getElementById("output-value").innerText = Math.pow(
        2,
        parseInt(document.getElementById("output-value").innerText)
    );
}

function log() {
    document.getElementById("output-value").innerText = Math.log10(
        document.getElementById("output-value").innerText
    );
}

function lnlog() {
    document.getElementById("output-value").innerText = Math.log(
        document.getElementById("output-value").innerText
    );
}

function rational() {
    document.getElementById("output-value").innerText =
        1 / parseInt(document.getElementById("output-value").innerText);
}

function factorial(n = document.getElementById("output-value").innerText) {
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

function abc() {
    var a = (document.getElementById("output-value").innerText += "**");
    printOutput("");
    printHistory(a);
}

function expo() {
    var x = document.getElementById("output-value").innerText;
    var a = parseInt(x).toExponential();
    printOutput("");
    printHistory(a);
}

// Memory functions
function modx() {
    document.getElementById("output-value").innerText =
        0 - parseInt(document.getElementById("output-value").innerText);
}

function ms() {
    mv.unshift(parseInt(document.getElementById("output-value").innerText));
    document.getElementById("memory-value").innerText = mv;
}

var mv = [];
function mp() {
    if (mv[0]) {
        document.getElementById("output-value").innerText =
            mv[0] + parseInt(document.getElementById("output-value").innerText);
    }
}

function mm() {
    if (mv[0]) {
        document.getElementById("output-value").innerText =
            mv[0] - parseInt(document.getElementById("output-value").innerText);
    }
}

function mc() {
    document.getElementById("memory-value").innerText = "";
    mv = [];
}

function mr() {
    document.getElementById("output-value").innerText += mv[0];
}

// DEG AND RAD

const deg_rad = () => {
    let val = document.getElementById("deg");
    let convert = parseInt(document.getElementById("output-value").innerText);

    if (val.innerText == "DEG") {
        val.innerText = "RAD";
        document.getElementById("output-value").innerText =
            convert * (180 / Math.PI);
        console.log(convert.innerText);
    } else {
        val.innerText = "DEG";

        document.getElementById("output-value").innerText =
            convert * (Math.PI / 180);
        console.log(convert.innerText);
    }
};
