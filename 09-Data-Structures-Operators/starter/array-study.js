///////////////////////////////////////
// ARRAY STUDY QUESTIONS

// Problem 1: Deep Nested Array Extraction
// const data = [
//   [1, 2, [3, 4, [5, 6]]],
//   [7, 8, [9, 10]],
// ];
// // Extract: first element of first sub-array, third element of
// // the deeply nested array, and second element of second sub-array
// // Expected result: a = 1, b = 5, c = 8

// const [[a, , [, , [b]]], [, c]] = data;
// console.log(`a:${a}, b:${b}, c:${c}`);

// Problem 2: Mixed with Rest Operator
// const numbers = [10, 20, 30, 40, 50, 60, 70, 80];
// // Extract first two numbers, skip the next two, then get
// // the remaining as an array
// // Expected result: first = 10, second = 20,
// // remaining = [50, 60, 70, 80]
// const [first, second, , , ...remaining] = numbers;
// console.log(first, second, remaining);

//Problem 3: Function Parameter Destructuring
// Create a function that takes an array and destructures it to:
// - Get the first element as 'start'
// - Get the last element as 'end'
// - Get everything in between as 'middle'
// Handle cases where array has 0, 1, or 2 elements
// const destructArray = function (array) {
//   const [start, ...middle] = array;
//   const end = middle.pop();
//   console.log(`start:${start},middle:${middle},end:${end}`);
// };
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// destructArray(array);

// Problem 4: Swapping with Default Values
// let a = undefined;
// let b = null;
// const arr = [100];
// // Use destructuring to assign arr[0] to 'a' with default value 50
// // Assign arr[1] to 'b' with default value 75
// // Then swap the values of a and b using array destructuring

// [a = 50, b = 75] = arr;

// [b, a] = [a, b];
// console.log(`a:${a}, b:${b}`);

// Problem 5: Complex Nested Scenario
// const matrix = [
//   [1, [2, 3], 4],
//   [5, [6, [7, 8, 9]], 10],
//   [11, [12, 13], 14, 15],
// ];
// Extract:
// - First element of first row
// - Second element from the nested array in first row
// - The deeply nested 8 from second row
// - Last element of third row
// - Create an array of all the "middle" elements (6, 12) from nested arrays

// const [[a, [, b]], [, [, [, c]]], [, , , d]] = matrix;
// console.log(a, b, c, d);

// Problem 6: Dynamic Length Handling
// Write a function that accepts any array and uses destructuring to:
// - Always get first element as 'head'
// - Always get second element as 'neck' (default to 'missing')
// - Get all remaining elements as 'body'
// - Handle empty arrays gracefully
// Test with: [], [1], [1,2], [1,2,3,4,5]

// const destructArray = function (array) {
//   if (array.length === 0) {
//     console.log('array empty');
//     return;
//   }
//   const [head, neck = 'missing', ...body] = array;
//   console.log(head, neck, body);
// };
// destructArray([]);
// destructArray([1]);
// destructArray([1, 2]);
// destructArray([1, 2, 3, 4, 5]);

// Problem 7: Object-Array Hybrid
// const users = [
//   { name: 'Alice', scores: [85, 92, 78] },
//   { name: 'Bob', scores: [90, 88, 94, 76] },
//   { name: 'Charlie', scores: [82] },
// ];
// For each user, extract their name and their first two scores
// If they don't have a second score, default it to 0
// Create variables like: alice_name, alice_first, alice_second, etc.

// for (const {
//   name: alice_name,
//   scores: [alice_first, alice_second = 0],
// } of users) {
//   console.log(alice_name, alice_first, alice_second);
// }

// Problem 8: Ignore and Skip Pattern
// const data = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// Use destructuring to get:
// - 1st element
// - 4th element
// - 7th element
// - Everything from 8th position onward
// Skip all other elements cleanly

// const [a, , , b, , , c, ...d] = data;
// console.log(a, b, c, d);
