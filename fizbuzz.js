/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz”
instead of the number and for the
multiples of five output “Buzz”.
For numbers which are
multiples of both three and five output “FizzBuzz”.

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/
const Test = require("./Test")

function divisible3(number) {
	if (number % 3 === 0)
		return "Fizz"
	return String(number)
}

function divisible5(number) {
	if (number % 5 === 0)
		return "Buzz"
	return String(number)
}

function divisible15(number) {
	if (number % 15 === 0)
		return "FizzBuzz"
	return String(number)
}

function fizzBuzz(n) {
	let result = new Array(n)
	for (let i = 0; i < n ; ++ i) {
		result[i] = i + 1
	}
	let a = result
		.map(element => divisible15(element))
		.map(element => divisible5(element))
		.map(element => divisible3(element))
	return a
}

console.log("Test fizzBuzz")
let n = 15
let expected = ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
let result = fizzBuzz(n)
let assert = Test.compare1DArray(expected, result)
console.log(`Test n: ${n}`)
console.log(`Correct Result: ${assert}`)
n = 1
expected = ["1"]
result = fizzBuzz(n)
assert = Test.compare1DArray(expected, result)
console.log(`Test n: ${n}`)
console.log(`Correct Result: ${assert}`)
