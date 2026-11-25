// function cal(sign) {
//   var num1 = +prompt("Enter num1");
//   var num2 = +prompt("Enter num2");
//   //  console.log(sign);
//   if (sign === "+") {
//     var result = num1 + num2;
//     console.log("Addition", result);
//   } else if (sign === "-") {
//     var result = num1 - num2;
//     console.log("minus", result);
//   } else if (sign === "*") {
//     var result = num1 * num2;
//     console.log("multpy", result);
//   } else if (sign === "/") {
//     var result = num1 / num2;
//     console.log("div", result);
//   }
// }

function setInputValue(value) {
    var input = document.getElementById("input");
    input.value += value
    console.log(input.value)
    
}

function cal(){
    var input = document.getElementById("input");
    var ans = eval(input.value)
    input.value = ans
    }

function clearInput(value){
    var input = document.getElementById('input')
    input.value = ''
    console.log(input);
    
}

function lastDigtClear(){
    var input = document.getElementById('input');
    input.value = input.value.slice(0,-1);
}