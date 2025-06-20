//////////////////////////////
// OBJECT STUDY QUESTIONS

//Problem 1: Nested Object Extraction
// const user = {
//   id: 1,
//   profile: {
//     personal: {
//       name: 'John',
//       age: 30,
//       address: {
//         street: '123 Main St',
//         city: 'Boston',
//         coordinates: { lat: 42.3601, lng: -71.0589 },
//       },
//     },
//     professional: {
//       title: 'Developer',
//       company: 'TechCorp',
//     },
//   },
// };
// Extract: name, city, latitude, and company into separate variables
// Use aliasing to rename latitude to 'lat_coordinate'

// const {
//   profile: {
//     personal: {
//       name,
//       address: {
//         city,
//         coordinates: { lat: lat_coordinate },
//       },
//     },
//     professional: { company },
//   },
// } = user;

// console.log(name, city, lat_coordinate, company);

// Problem 2: Dynamic Property Names
// const data = {
//   user_1_name: 'Alice',
//   user_1_email: 'alice@email.com',
//   user_2_name: 'Bob',
//   user_2_email: 'bob@email.com',
//   total_count: 2,
// };
// const userId = 1;
// Use computed property names to extract the name and email for the dynamic userId
// Extract total_count with a default value of 0
// const name = data[`user_${userId}_name`];
// console.log(name);

// const { [`user_${userId}_name`]: value } = data;
// console.log(value);

//Problem 3: Function Parameter Destructuring with Defaults
// Create a function called 'processOrder' that accepts an object parameter
// The object might have: { item, quantity, price, discount, shipping }
// Use destructuring with defaults: quantity = 1, discount = 0, shipping = 5.99
// Some properties might be missing entirely
// Return total cost: (item price * quantity - discount + shipping)
// Test with various incomplete objects

// const processOrder = function (object) {
//   const { quantity = 1, price, discount = 0, shipping = 5.99 } = object;
//   return price * quantity - discount + shipping;
// };

// const obj1 = { item: 'apple', quantity: 1, price: 2, discount: 1, shipping: 1 };
// console.log(processOrder(obj1));
// console.log(processOrder({ price: 2 }));

//Problem 4: Mixed Array-Object Destructuring
// const response = {
//   status: 'success',
//   data: [
//     { name: 'Product A', details: { price: 100, stock: 5 } },
//     { name: 'Product B', details: { price: 200, stock: 3 } },
//     { name: 'Product C', details: { price: 150, stock: 8 } },
//   ],
//   meta: { total: 3, page: 1 },
// };
// Extract: status, first product's name, second product's price,
// third product's stock, and meta total
// Handle case where any of these might not exist

// const {
//   status,
//   data: [
//     { name },
//     {
//       details: { price },
//     },
//     {
//       details: { stock },
//     },
//   ],
//   meta: { total },
// } = response;
// console.log(status, name, price, stock, total);

//Problem 5: Rest Operator with Objects
// const config = {
//   apiUrl: 'https://api.example.com',
//   timeout: 5000,
//   retries: 3,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer token123',
//     'X-API-Key': 'key456',
//   },
//   cache: true,
//   debug: false,
// };
// // Extract apiUrl and timeout specifically
// // Group all headers into a 'headers' variable
// // Put all remaining properties into a 'otherOptions' object
// const { apiUrl, timeout, headers, ...otherOptions } = config;
// console.log(apiUrl, timeout, headers, otherOptions);

//Problem 6: Renaming and Default Values Challenge
// const apiResponse = {
//   user_id: 42,
//   user_name: 'jane_doe',
//   user_email: 'jane@example.com',
//   account_type: 'premium',
//   last_login: '2024-01-15',
// };
// // Use destructuring to create variables:
// // id (from user_id), username (from user_name), email (from user_email)
// // accountType (from account_type), lastSeen (from last_login)
// // Also extract a 'status' property with default value "active"

// const {
//   user_id: id,
//   user_name: username,
//   user_email: email,
//   account_type: accountType,
//   last_login: lastSeen,
//   status = 'active',
// } = apiResponse;

// console.log(id, username, email, accountType, lastSeen, status);

//Problem 7: Function that Returns Multiple Values
// Create a function 'analyzeText' that takes a string and returns an object with:
// { wordCount, charCount, firstWord, lastWord, longestWord }
// Then create another function that calls analyzeText and uses destructuring to:
// - Get wordCount and charCount with aliases 'words' and 'chars'
// - Get longestWord with default "none"
// - Put firstWord and lastWord into a 'boundaries' object using rest operator

// const analyzeText = function (string) {
//   return { wordCount, charCount, firstWord, lastWord, longestWord };
// };

// const destructObj = function (string) {
//   const {
//     wordCount: word,
//     charCount: chars,
//     longestWord = 'none',
//     ...boundaries
//   } = analyzeText(string);
// };
// console.log(destructObj('abc def ghi ijk lmn'));

// Problem 8: Complex Nested with Arrays
// const company = {
//   name: 'TechStart',
//   departments: {
//     engineering: {
//       employees: [
//         { name: 'Alice', skills: ['JavaScript', 'React', 'Node.js'] },
//         { name: 'Bob', skills: ['Python', 'Django'] },
//       ],
//       budget: 500000,
//     },
//     marketing: {
//       employees: [{ name: 'Carol', skills: ['SEO', 'Content'] }],
//       budget: 200000,
//     },
//   },
//   founded: 2020,
// };
// // Extract: company name, first engineering employee's name,
// // first engineering employee's second skill, marketing budget,
// // and total number of marketing employees

// const {
//   name: companyName,
//   departments: {
//     engineering: {
//       employees: [
//         {
//           name: firstEmployee,
//           skills: [, secondSkill],
//         },
//       ],
//     },
//     marketing: { budget },
//   },
//   founded,
// } = company;
// console.log(companyName, firstEmployee, secondSkill, budget, founded);

// Problem 9: Destructuring in Loops
// const orders = [
//   {
//     id: 1,
//     customer: { name: 'John', tier: 'gold' },
//     items: [{ price: 100 }, { price: 50 }],
//   },
//   {
//     id: 2,
//     customer: { name: 'Jane', tier: 'silver' },
//     items: [{ price: 200 }],
//   },
//   {
//     id: 3,
//     customer: { name: 'Bob', tier: 'bronze' },
//     items: [{ price: 75 }, { price: 25 }, { price: 30 }],
//   },
// ];
// // Use destructuring in a loop to extract each order's:
// // - id, customer name, customer tier, and total price of all items
// // Create a summary array with this information

// for (const {
//   id,
//   customer: { name, tier },
//   items,
// } of orders) {
//   let totalPrice = 0;
//   for (const { price } of items) {
//     totalPrice += price;
//   }

//   const summary = [id, name, tier, totalPrice];
//   console.log(summary);
// }

// Problem 10: Error Handling with Destructuring
// const responses = [
//   { success: true, data: { user: { name: 'Alice', age: 25 } } },
//   { success: false, error: { message: 'Not found', code: 404 } },
//   { success: true, data: { user: { name: 'Bob' } } }, // missing age
//   null, // entirely null response
//   { success: true }, // missing data
// ];
// // Create a function that safely destructures each response to extract:
// // - success status
// // - user name (if exists)
// // - user age (default to "unknown")
// // - error message (if exists)
// // Handle all the edge cases without throwing errors

// const destructObj = function (array) {
//   // for (const {
//   //   success,
//   //   data: { user: { name = 'unknown', age = 'unknown' } = {} } = {},
//   //   error: { message = 'Not found' } = {},
//   // } of array) {
//   //   console.log(success, name, age, message);
//   // }
//   for (const el of array) {
//     if (!el) {
//       console.log('Invalid response');
//       continue;
//     }

//     const { success = false } = el;

//     if (success) {
//       const user = el.data?.user;
//       const name = user?.name ?? 'unknown';
//       const age = user?.age ?? 'unknown';
//       console.log(`✅ Success | Name: ${name}, Age: ${age}`);
//     } else {
//       const message = el.error?.message ?? 'Unknown error';
//       console.log(`❌ Error | Message: ${message}`);
//     }
//   }
// };

// destructObj(responses);
