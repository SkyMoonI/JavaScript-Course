'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2) {
//     console.log(`Here is your declicious pasta with ${ing1} and ${ing2}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };
///////////////////////////////////////
// String Methods Practice

// const flights1 =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)
// for (const flight of flights1.split('+')) {
//   // console.log(flight);
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type} ${from} ${to} (${time})`;
//   // console.log(output);
//   const newTime = time.replace(':', 'h');
//   const newTo = to.slice(0, 3).toUpperCase();
//   const newFrom = from.slice(0, 3).toUpperCase();
//   const newType = type.replaceAll('_', ' ').trim();

//   // console.log(`${newType} from ${newFrom} to ${newTo} (${newTime})`);
//   const finalOutput = `${
//     newType.includes('Delayed') ? '🔴 ' + newType : '' + newType
//   } from ${newFrom} to ${newTo} (${newTime})`.padStart(44);
//   // console.log(finalOutput.length);
//   // console.log(finalOutput);
// }

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written 
in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM 
(see code below), and conversion will happen when the button is 
pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const button = document.querySelector('button');
// button.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   console.log(text);

//   const rows = text.split('\n');
//   console.log(rows);

//   const trimedRows = [];

//   for (const row of rows) {
//     const trimmedRow = row.trim();
//     trimedRows.push(trimmedRow);
//   }
//   console.log(trimedRows);

//   const loweredRows = [];

//   for (const row of trimedRows) {
//     const lowerRow = row.toLowerCase();
//     loweredRows.push(lowerRow);
//   }
//   console.log(loweredRows);

//   const camelCaseRows = [];
//   for (const row of loweredRows) {
//     const firstWord = row.slice(0, row.indexOf('_'));
//     const secondWord = row.slice(row.indexOf('_') + 1);
//     const secondWordUpper = secondWord.replace(
//       secondWord[0],
//       secondWord[0].toUpperCase()
//     );

//     const finalWord = firstWord + secondWordUpper;
//     camelCaseRows.push(finalWord);
//   }
//   console.log(camelCaseRows);

//   for (let i = 0; i < camelCaseRows.length; i++) {
//     console.log(camelCaseRows[i].padEnd(20), '✅'.repeat(i + 1));
//   }
// });

///////////////////////////////////////
// Working With Strings - Part 3

// Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('334859493847755774747'));

// Repeat
// const message2 = 'Bad waether... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

///////////////////////////////////////
// Working With Strings - Part 2

// const airline1 = 'TAP Air Portugal';

// console.log(airline1.toLowerCase());
// console.log(airline1.toUpperCase());

// Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// Alternative solution to replaceAll with regular expression
// console.log(announcement.replace(/door/g, 'gate'));

// Booleans
// const plane1 = 'Airbus A320neo';
// console.log(plane1.includes('A320'));
// console.log(plane1.includes('Boeing'));
// console.log(plane1.startsWith('Airb'));

// if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
//   // console.log('Part of the NEW ARirbus family');
// }

// Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////////
// Working With Strings - Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
//   else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// 1. Create an array 'events' of the different game events
// that happened (no duplicates)

// console.log(gameEvents.values());
// console.log(new Set(gameEvents.values()));
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2. After the game has finished, is was found that the yellow
// card from minute 64 was unfair. So remove this event from the
// game events log.
// gameEvents.delete(64);
// console.log(gameEvents);

// 3. Print the following string to the console: "An event happened
// , on average, every 9 minutes" (keep in mind that a game has 90
// minutes)
// console.log(gameEvents.keys());
// console.log(
//   `"An event happened, on average, every ${90 / gameEvents.size} minutes"`
// );

// 4. Loop over the events and log them to the console,
// marking whether it's in the first half or second half
// (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
// for (const [key, value] of gameEvents) {
//   // console.log(`${key < 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${key}:${value}`);
// }

///////////////////////////////////////
// Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   // if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

///////////////////////////////////////
// Maps: Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

///////////////////////////////////////
// New Operations to Make Sets Useful!

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('Intersection:', commonFoods);
// console.log([...commonFoods]);

// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log('Union:', italianMexicanFusion);
// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log('Difference italian', uniqueItalianFoods);

// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log('Difference mexican', uniqueMexicanFoods);

// const uniqueItalianAndMexicanFoods =
//   italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

////////////////////////
// Sets
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Jonass'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('jonasschmedtmann').size);
////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// console.log(openingHours);
// Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
// for (const [day, { open, close }] of entries) {
//   // console.log(`On ${day} we open at ${open} and close at ${close}`);
// }
////////////////////////

// const users = [{ name: 'jonas', email: 'hello@jonas.io' }];
// // console.log(users[0]?.name ?? 'user array empty');

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours?.[day]?.open ?? 'closed';
//   // console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.orderPasta?.(0, 1) ?? "method doesn't exist.");

// console.log(restaurant.openingHours);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
///////////////////////////////////////
// 1. Create one player array for each team
// (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper
// and the others are field players. For Bayern Munich (team 1)
// create one variable ('gk') with the goalkeeper's name,
// and one array ('fieldPlayers') with all the remaining 10
// field players
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of
// both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute
// players. So create a new array ('players1Final') containing
// all the original team1 players plus 'Thiago', 'Coutinho' and
// 'Perisic'
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5. Based on the game.odds object, create one variable
// for each odd (called 'team1', 'draw' and 'team2')
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary
// number of player names (NOT an array) and prints each of them
// to the console, along with the number of goals that were scored
// in total (number of player names passed in)
// const printGoals = function (...playerNames) {
//   console.log(...playerNames);

//   const { scored: scoredPlayer } = game;
//   console.log(scoredPlayer);

//   playerNames.forEach(function (player) {
//     if (scoredPlayer.includes(player)) {
//       const goals = scoredPlayer.filter(p => p === player).length;
//       console.log(`${player} has goaled ${goals} times.`);
//     } else {
//       console.log(`${player} doesn't have and goal.`);
//     }
//   });
// };

// printGoals(...players1);
// printGoals(...players2);

// 7. The team with the lower odd is more likely to win.
// Print to the console which team is more likely to win,
// WITHOUT using an if/else statement or the ternary operator.
// console.log(`Most likely to win: ${(team1 < team2 && 'team 1') || 'team 2'}`);

// console.log(
//   `${(team1 < team2 && game.team1) || game.team2} is more likely to win.`
// );

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// 1. Loop over the game.scored array and print each
// player name to the console, along with the goal number
// (Example: "Goal 1: Lewandowski")

// for (const [index, player] of game.scored.entries()) {
//   // console.log(`Goal ${index + 1}: ${player}`);
// }

// 2. Use a loop to calculate the average odd and log it
// to the console (We already studied how to calculate averages,
// you can go check if you don't remember)
// const odds = Object.values(game.odds);
// // console.log(odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way,
//  exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   // console.log(`Odd of ${teamStr} ${odd}`);
// }

// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
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
