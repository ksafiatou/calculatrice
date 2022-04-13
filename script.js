function forclear() {
    document.getElementById("output").value = "0";
}
function removeZero() {
    var value = document.getElementById("output").value;
    if (value == "0") {
         value = " "
         document.getElementById("output").value = value;
    }
}
function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").value = value;
}
function fordisplay(value) {
    removeZero()
    document.getElementById("output").value += value;
}
function solve() {
    removeZero()
    var equation = document.getElementById("output").value;
    var solved = eval(equation);
    document.getElementById('output').value = solved;
}
get