//Question-01

// var  fullName = prompt("Enter Your FullName");
// var  age = +prompt("Enter Your Age only Number");
// var  city = prompt("Enter Your City");
// var  courseName = prompt("Enter Your Course");
// var  instituteName = prompt("Enter Your Institute Name");

// document.write("My Name is " +fullName+'.'  + "</br>");
// document.write(`I am ${age} Years old. <br>`); // + lagne ki zarorat nahi hai
// document.write(`I live in  ${city}. </br>`);
// document.write(`I am Learning ${courseName}.</br>`);
// document.write(`My institute is ${instituteName}. </br>`);

//Question-02

// var programLanguage = prompt("Enter programming language");
// let languageTopic = prompt("Enter current learning topic");
// const batch = prompt("Enter batch no");

// console.log(programLanguage);
// console.log(languageTopic);
// console.log(batch);

//Question-03

// var varStr = "";
// var varNum = 123;
// var varboolean =true;
// var undef =undefined;
// var varNull =null;

// document.write("<h3>Question-03</h3>")
// document.write(`varStr = ${typeof varStr}</br>`);
// document.write(`varNum = ${typeof varNum}</br>`);
// document.write(`undef = ${typeof undef}</br>`);
// document.write(`varNull = ${typeof varNull}</br>`);

//Question-04

// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");

// document.write("<h3>Question-04</h3>")
// document.write(`Addition: ${firstNumber + secondNumber}</br>`)
// document.write(`Subtraction: ${firstNumber - secondNumber}</br>`)
// document.write(`Division: ${firstNumber / secondNumber}</br>`)
// document.write(`Multiplication: ${firstNumber * secondNumber}</br>`)
// document.write(`Modulus: ${firstNumber % secondNumber}`)

//Question-05

// var product1 = +prompt('product1 Price')
// var product2 = +prompt('product2 Price')
// var product3 = +prompt('product3 Price')
// var totalSum = product1 + product2 + product3;

// document.write("<h3>Question-05</h3>")
// document.write(`Total Bill: Rs. ${totalSum}</br>`)
// document.write(`Discount: Rs. ${totalSum / 100 * 10}</br>`)
// document.write(`Final Bill: Rs. ${totalSum - totalSum / 100 * 10}</br>`)

//Question-06

// A = 10 + 5 * 2            // 20
// B = (10 + 5) * 2          // 30
// C = 20 / 2 + 3 * 4 - 5    // 17
// D = 5 + 2 * (8 - 3) / 5  // 7
// E = 30 % 4 + 6 * 2       //14

// console.log(A);
// console.log(B);
// console.log(C);
// console.log(D);
// console.log(E);

//Questio-07

// var  firstName = prompt("Enter Your firstName");
// var  lastName = prompt("Enter Your lastName");
// var  city = prompt("Enter Your City");

// document.write("<h3>Question-07</h3>")
// document.write(`Welcome ${firstName +' '+ lastName}! </br>`)
// document.write(`Your are From ${city}. </br>`)

//Question-08

// var birthYear = +prompt('Enter your Birth Year');
// var currentYear = new Date().getFullYear();

// document.write("Your approximate age is " + (currentYear - birthYear) +' years.' )

//Question-09


// var subject = ["Maths", "English", "Urdu", "Science", "Computer"];
// var obtainedMarks = 0;
// var perSubjectMark = 100;
// var totalMark = 0;

// for (var i = 0; i < subject.length; i++) {
//   var markInput = +prompt("Enter Mark " + subject[i]);
//   console.log(markInput);

//   var mark = markInput;

//   if (mark < 0 || mark > perSubjectMark) {
//     alert("Gretarn Then 0 and less then 100");
//   } else {
//     obtainedMarks += mark;
//     console.log(obtainedMarks);
//   }
// }

// totalMark += subject.length * perSubjectMark;
// console.log(totalMark);

// percentage = Math.floor((obtainedMarks / totalMark) * 100);
// console.log(percentage);

// document.write('Obtained Marks: ' + obtainedMarks + '</br>')
// document.write('Total Marks: ' + totalMark +'</br>')
// document.write('Percentage: ' + percentage +'%')

//Question-10

// var pkr = +prompt('Enter Amount PKR');
// var usd = 280;
// var convert = (pkr / usd).toFixed(2);
// document.write('Equivalent USD: '+ '$'+convert)

//Question-11

// var basicSalary = +prompt('Enter basic Salary');

// var percentage = [20,10,5];
// var house = basicSalary * percentage[0] / 100;
// var medicl = basicSalary * percentage[1] / 100;
// var tex = basicSalary * percentage[2] / 100;

// var grossSalary = basicSalary + house + medicl;
// var netSalary = grossSalary - tex;

// // console.log(netSalary);

// document.write('Basic Salary: Rs. ' + basicSalary + '</br>');
// document.write('House Allowance: Rs. ' + house + '</br>');
// document.write('Medical Allowance: Rs.' + medicl + '</br>');
// document.write('Gross Salary: Rs.' + grossSalary + '</br>');
// document.write('Tax Deduction: Rs. ' + tex + '</br>');
// document.write('Net Salary: Rs. '+ netSalary);
