function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log('2 + 2 = ' + addTwoNumbers(2, 2)); // expected result: 4. works in console.

function convertHoursToMinutes(hours) {
  return hours * 60;
}
console.log('2 hours is the same as ' + convertHoursToMinutes(2) + ' minutes.'); // expected result: 120. works in console.

function getGreeting(name) {
  return 'Hello ' + name + '! ';
}
console.log(getGreeting('World')); // expected result: 'Hello World!'. works in console.

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log('(5+10)*5 = ' + addAndMultiplyBy5(10, 5)); // expected value of 75. works in console.

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
console.log('35*10/5 = ' + multiplyAndDivideBy5(35, 10)); // expected value of 70. works in console.

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log(subtractTwoNumbers(22, 7)); // expected value of 15. works in console.

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log('the circumference of a circle with a radius of 5 is ' + getCircleCircumference(5)); // expected result of 31.41592653589793. works in console.

function getFullName(firstName, lastName) {
  return 'His full name is ' + firstName + ' ' + lastName + '.';
}
console.log(getFullName('Juan', 'Ramirez')); // expected result of "Juan Ramirez". works in console.

function cube(number) {
  return 'the cube of 5 is ' + number * number * number;
}
console.log(cube(5)); // expected result of 125. works in console.
