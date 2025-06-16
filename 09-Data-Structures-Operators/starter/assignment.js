'use strict';
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

const [, , thirdBook] = books;
// console.log(thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

const { keywords: tags } = books[0];
// console.log(tags);

const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
// console.log(bookRating);

const printBookInfo = function ({ title, author, year = 'year unknown' }) {
  console.log(`${title} was written by ${author} in ${year}`);
};

// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// });
// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

const bookAuthors = { ...books[0].author, ...books[1].author };
// console.log(bookAuthors);

const spellWord = function (string) {
  console.log(...string);
};

// spellWord('JavaScript');

const [mainKeyword, ...rest1] = books[0].keywords;
// console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
};

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

const hasExamplesInJava = function (book) {
  console.log(book.programmingLanguage === 'Java' || 'no data available');
};

// hasExamplesInJava(books[1]);

// books.forEach(function (book) {
//   book.onlineContent && console.log(book.title);
// });

// books.forEach(function (book) {
//   book.onlineContent ??
//     console.log(`"${book.title}" provides no data about its online content`);
// });

// books.forEach(function (book) {
//   book.edition ||= 1;
//   book.edition = book.edition || 1;
//   console.log(book.edition);
// });

books.forEach(function (book) {
  // book: {
  //   thirdParty: {
  //     goodreads: {
  //       rating: bookRating;
  //     }
  //   }
  // }

  // const {
  //   thirdParty: {
  //     goodreads: { rating: bookRating },
  //   },
  // } = book;

  // book.highlighted = book.highlighted && !(bookRating < 4.2);
  // book.highlighted &&= !(bookRating < 4.2);

  book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2);
  // book.highlighted =
  //   book.highlighted && !(book.thirdParty.goodreads.rating < 4.2);
  // console.log(book.highlighted);
});

let pageSum = 0;
for (const book of books) pageSum += book.pages;
// console.log(pageSum);

const allAuthors = [];
for (const book of books) {
  // console.log(typeof book.author);
  if (typeof book.author === 'object') {
    allAuthors.push(...book.author);
  } else {
    allAuthors.push(book.author);
  }
}
// console.log(allAuthors);

// for (const [index, author] of allAuthors.entries()) console.log(`${index + 1}. ${author}`);

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  // ...
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
// console.log(newBook);

const pages = 880;
const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  // ...
  pages,
};
// console.log(newBook2);

const getFirstKeyword = function (book) {
  console.log(book.keywords?.[0] ?? 'undefined');
};
// getFirstKeyword(books[0]);
// getFirstKeyword(newBook2); // from previous tasks

const entries1 = [];
// console.log(books[0].thirdParty.goodreads);

for (const goodread of Object.keys(books[0].thirdParty.goodreads)) {
  entries1.push([goodread]);
}
// console.log(entries1);

const entries2 = [];
for (const [key, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries2.push([key, value]);
}
// console.log(entries2);

const entries3 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries3);

// const book = {
//   title: 'Clean Code',
//   author: 'Robert C. Martin',
//   pages: 464,
//   published: 2008,
// };

// // 🔸 1. Tüm key'leri yazdır (klasik yöntem)
// for (const key in book) {
//   console.log(key);
// }

// // 🔸 2. Tüm key'leri yazdır (modern yöntem)
// for (const key of Object.keys(book)) {
//   console.log(key);
// }

// // 🔸 3. Tüm value'ları yazdır (klasik yöntem)
// for (const key in book) {
//   console.log(book[key]);
// }

// // 🔸 4. Tüm value'ları yazdır (modern yöntem)
// for (const value of Object.values(book)) {
//   console.log(value);
// }

// // 🔸 5. Key-value çiftlerini yazdır (klasik yöntem)
// for (const key in book) {
//   console.log(`${key}: ${book[key]}`);
// }

// // 🔸 6. Key-value çiftlerini yazdır (modern yöntem)
// for (const [key, value] of Object.entries(book)) {
//   console.log(`${key}: ${value}`);
// }

// // ---------------------------------------------

// const openingHours1 = {
//   mon: { open: 9, close: 17 },
//   tue: { open: 10, close: 18 },
//   fri: { open: 8, close: 20 },
// };

// // 🔸 7. Günleri yazdır (klasik yöntem)
// for (const day in openingHours1) {
//   console.log(day);
// }

// // 🔸 8. Günleri yazdır (modern yöntem)
// for (const key of Object.keys(openingHours1)) {
//   console.log(key);
// }

// // 🔸 9. Açılış saatlerini yazdır (klasik yöntem)
// for (const day in openingHours1) {
//   console.log(
//     `On ${day} we open at ${openingHours1[day].open} and close at ${openingHours1[day].close}`
//   );
// }

// // 🔸 10. Açılış saatlerini yazdır (modern yöntem)
// for (const [day, { open, close }] of Object.entries(openingHours1)) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}
// console.log(allKeywords);

const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);

uniqueKeywords.add('coding');
uniqueKeywords.add('science');
// console.log(uniqueKeywords);

uniqueKeywords.delete('business');
// console.log(uniqueKeywords);

const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);

uniqueKeywords.clear();
// console.log(uniqueKeywords);

const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
// console.log(bookMap);

bookMap.set('pages', 464);
// console.log(bookMap);

// console.log(`${bookMap.get('title')} is written by ${bookMap.get('author')}`);

// console.log(bookMap.size);

// console.log(
//   bookMap.has('author') ? 'The author of the book is known' : 'No author'
// );

// console.log(books[0]);
const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') {
    // console.log(`${key}: ${value}`);
  }
}
