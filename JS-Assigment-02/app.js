// Q1:Write a JavaScript program that takes a number from the user and determines whether it is:

// var num = +prompt("Enter Number");

// if (num == 0) {
//   alert(num +" is a Zero Number");
// } else if (num > 0) {
//   alert(num +" is a Positive Number");
// } else if (num < 0) {
//   alert(num +" is a Negative Number");
// } else {
//   alert(num  +" Invalid Number");
// }

//Q2:Ask the user to enter an integer and determine whether it is even or odd using the modulus operator.

// var num = +prompt("Enter a Number");
// var checkNum = num % 2;

// if (checkNum == 0) {
//   alert(num + " is an even number");
// } else if (checkNum !== 0) {
//   alert(num + " is an odd number");
// }

// Question 3: Voting Eligibility (5 Marks)
// Create a program that asks the user for their age.

// var age = +prompt("Enter your age");

// if (age >= 18) {
//   alert("Yor are Eligible to vote");
// } else if (age < 18) {
//   alert("You are not eligible to vote.");
// } else {
//   alert("Invalid Number");
// }

// Question 4: Find the Largest Number (5 Marks)
// Take three numbers from the user and find the largest number using conditional statements.

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var num3 = +prompt("Enter Third number");

// if (num1 > num2 && num1 > num3) {
//   alert(num1 + " is the largest number.");
// } else if (num2 > num1 && num2 > num3) {
//   alert(num2 + " is the largest number.");
// } else if (num3 > num1 && num3 > num2) {
//   alert(num3 + " is the largest number.");
// } else {
//   alert("Invalid Number");
// }

// Question 5: Login Authentication (5 Marks)
// Create a simple login system using fixed credentials.

// var userName = prompt("Enter Username");
// var userPassword = prompt("Enter userPassword");

// if (userName == "admin" && userPassword == "admin123") {
//   alert("Login Successful");
// } else if (userName != "admin") {
//   alert("Invalid Username");
// } else if (userPassword != "admin123") {
//   alert("Invalid Password");
// } else {
//   alert("Invalid Input");
// }

// Question 6: Student Grade Calculator (5 Marks)
// Ask the user to enter their percentage.

// var percentage = +prompt("Enter percentage:");

// if (percentage > 100 || percentage < 0) {
//   alert("Percentage 0 to 100");
// } else if (percentage >= 90 && percentage <= 100) {
//   alert("Your Grade is A+.");
// } else if (percentage >= 80 && percentage < 90) {
//   alert("Your Grade is A.");
// } else if (percentage >= 70 && percentage < 80) {
//   alert("Your Grade is B.");
// } else if (percentage >= 60 && percentage < 70) {
//   alert("Your Grade is C.");
// } else if (percentage >= 50 && percentage < 60) {
//   alert("Your Grade is D.");
// } else if (percentage < 50) {
//   alert("Fail");
// } else {
//   alert("Invaild Input");
// }

// Question 7: Discount Eligibility (5 Marks)
// A shopping store offers discounts based on the total purchase amount.

// var purAmout = +prompt("Enter Purchase Amount");
// var discount = [20, 10, 5, "No discount"];
// var discountPercent;   // jo condition pass hogi, uska discount yahan aayega
// var discountAmt = 0;
// var grossAmt = 0;

// if (purAmout >= 10000) {
//   discountPercent = discount[0];
// } else if (purAmout >= 5000) {
//   discountPercent = discount[1];
// } else if (purAmout >= 2000) {
//   discountPercent = discount[2];
// } else {
//   discountPercent = discount[3];
// }

// if (typeof discountPercent === "number") {
//   discountAmt = purAmout * discountPercent / 100;
// }
// grossAmt = purAmout - discountAmt;

// document.write('Original Amount: Rs. ' + purAmout + '<br>');
// document.write('Discount: ' + discountPercent + (typeof discountPercent === "number" ? '%' : '') + '<br>');
// document.write('Discount Amount: Rs. ' + discountAmt + '<br>');
// document.write('Final Amount: Rs. ' + grossAmt + '<br>');

