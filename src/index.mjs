import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// function printMe() {
//   console.log("hello");
// }

// function printThis(param) {
//   console.log(param)
// }

// printThis("hello")

// const printFunction = function() {
//   console.log('헐')
// }

// printFunction()

// const printFunctionWithParam = function(a, b) {
//   console.log(a, b)
// }

// printFunctionWithParam(10, 20)

// function sum(a, b){
//   return a + b
// }

// console.log(sum(2, 3))

// function calc(a, b=0) {
//   return (2 * (a + b))
// }

// console.log(calc(3))

// rest parameter

// function collectThings1(x, ...y) {
//     console.log(x)
//     console.log(y)
// }

// function collectThings2(...x, y) {
//   // 이렇게 쓸 수 없다!

// collectThings1(1, 2, 3, 4, 5, 6, 7, 8, 9)
// 1
// [2,3,4,5,6,7,8,9]

// arrow function

// const add1 = function(x, y) {
//   return x + y
// }

// const add2 = (x, y) => {
//   return x + y
// }

// const add3 = (x, y) => x + y

// console.log(add1(2, 3))
// console.log(add2(5, 3))
// console.log(add3(8, 3))

// nested function

// function outer() {
//   console.log('outer')
//   function inner() {
//     console.log('inner')
//   }
//   inner()
// }

// outer()
// outer
// inner

// function scope

// function doSomething1() {
//   let x = 10
//   const y = 20
//   var z = 30
//   console.log(x, y, z)
// }

// doSomething1() // 10 20 30

// console.log(x, y, z) // reference error

// var x = 10
// const y = 20
// let z = 30

// function doSomething2(){
//   console.log(x, y, z)
// }

// doSomething2() // 10 20 30

// closure

// function outer(x) {
//   function inner(y) {
//     return x + y
//   }
//   return inner
// }

// const outerReturn = outer(10)

// outerReturn
// f inner(y) {
//   return x + y
// }

// console.log(outerReturn(2)) // 12

// callback

// function foo(bar) {
//   bar()
// }

// foo(function() {
//   console.log('bar')
// })

// function named() {
//   console.log('named')
// }

// foo(named)

// HOF - Higher order function

// 1. It takes one or more functions as argument
// 2. It may return a function

// function getCapture(camera) {
//   camera()
// }

// getCapture(function(){
//   console.log('cannon')
// })
// cannon

// function returnFn() {
//   return function() {
//     console.log('returning')
//   }
// }

// const fn = returnFn()
// fn
// fn() {
//   console.log('returning')
// }

// fn()
// returning

// pure function

// function sayGreeting1(name) {
//   return `Hello ${name}`
// }

// console.log(sayGreeting1('jaehun'))

// let greeting = 'hi'

// function sayGreeting2(name) {
//   return `${greeting} ${name}`
// }

// console.log(sayGreeting2('js'))

// greeting = 'what up'

// console.log(sayGreeting2('js'))

// IIFE

// function x() {

// }

// x()

// function () {
 // syntax error 
// }

// (function () {
// })
// f() {}

// (function () {
// })()

// (function () {
//   console.log('IIFE')
// })()
// IIFE

// // recursion

// function foo() {
//   console.log('foo')
//   foo() // 난리납니다.
// }

// const foo = function buz() {
//   console.log('hello')
//   buz() // 난리납니다.
// }
// foo()

// base condition
// function recurse() {
//   if (base_condition) {
//     // do something
//     return
//   }
//   recurse()
// }

// function fetchWater(count) {
//   if (count === 0) {
//     console.log('no more water left')
//     return
//   }
//   console.log('fetching water...\n')
//   fetchWater(count -1)
// }

// fetchWater(5)