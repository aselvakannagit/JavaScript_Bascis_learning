//Simple Calculator using if else statements

let number1 = 9;
let number2 = 0;

let operator = "%";

if (operator === "+") {
  console.log(number1 + number2);
} else if (operator === "-") {
  console.log(number1 - number2);
} else if (operator === "*") {
  console.log(number1 * number2);
} else if (operator === "/") {
  if (number2 === 0) {
    console.log("Number 2 should not be zero");
  } else {
    console.log(number1 / number2);
  }
} else if (operator === "%") {
  if (number2 === 0) {
    console.log("Cannot calculate modulo by zero");
  } else {
    console.log(number1 % number2);
  }
}

//Student Marks and Grade Calculation using if else statements & Switch case statements & operators

let marks = 40;
let bonus = 3;

//checking if marks are valid or not valid

if (marks < 0 || marks > 100) {
  console.log("Invalid marks");
} else {
  //Adding bonus marks plus the original marks

  marks = marks <= 97 ? marks + bonus : marks;
  marks = marks > 100 ? 100 : marks;

  console.log("Marks: " + marks);

  //calculating grade based on marks

  let grade;
  if (marks >= 100) {
    grade = "A++";
  } else if (marks >= 90 && marks <= 99) {
    grade = "A";
  } else if (marks >= 70 && marks < 89) {
    grade = "B";
  } else if (marks >= 50 && marks < 69) {
    grade = "C";
  } else {
    grade = "F";
  }

  console.log("Grade: " + grade);

  //calculating result based on marks using ternary operator pass or fail

  let result = marks >= 50 ? "Pass" : "Fail";
  console.log("Result: " + result);

  switch (grade) {
    case "A++":
      console.log("High Marks, Awesome!");
      break;
    case "A":
      console.log("Excellent!");
      break;
    case "B":
      console.log("Good");
      break;
    case "C":
      console.log("Average");
      break;
    case "F":
      console.log("Needs Improvement");
      break;
  }
}
