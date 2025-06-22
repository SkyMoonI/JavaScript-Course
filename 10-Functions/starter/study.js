'use strict';

///////////////////////////////////
// Challenge 5: IIFE + Event Listener Trap
// (function () {
//   document.querySelector('.buy').addEventListener('click', function () {
//     alert('Thanks for your purchase!');
//   });
// })();

///////////////////////////////////
// Challenge 4: call() and apply()

// const person1 = {
//   name: 'Jonas',
//   introduce(greeting1, greeting2) {
//     console.log(`My name is ${this.name}. ${greeting1} ${greeting2}`);
//   },
// };

// const person2 = {
//   name: 'Martha',
// };

// const introduce = person1.introduce;

// introduce.call(person2, 'Hi', 'How are you?');
// introduce.apply(person2, ['Hi', 'How are you?']);

///////////////////////////////////
// Challenge 3: Function Returning Function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

///////////////////////////////////
// Challenge 2: Partial Application with bind()
// const addTax = (rate, value) => value + value * rate;

// const addVAT = addTax.bind(null, 0.18);
// console.log(addVAT(100));
// console.log(addVAT(23));

///////////////////////////////////
// Challenge 1: Booking System with Closures
// const createBookingSystem = function () {
//   let bookings = [];

//   return function (name) {
//     bookings.push(name);

//     console.log(
//       `Booking ${bookings.length} for ${bookings[bookings.length - 1]}`
//     );
//   };
// };

// const book = createBookingSystem();

// book('Alice');
// book('Bob');
// book('Bob');
// book('Bob');
// book('Alice');

// logs: "Booking 1 for Alice", "Booking 2 for Bob"
