// const convertToUpperCase = (text) => text.toUpperCase();

// console.log(convertToUpperCase("Hello"));

// Sukurkite funkciją extractSubstring, kuri grąžina iškarpos, pradedant nuo 3 iki 7 simbolio, tekstą.

const extractSubstring = (secondText) => secondText.substring(2, 7);
console.log(extractSubstring("Sveikas Pasauli"));

// Sukurkite funkciją capitalizeFirstLetter, kuri pavertimas pirmąją kiekvieno žodžio raidę tekste į didžiąją.

// const capitalizeFirstLetter = (text) => {
//   const words = text.split(" ");
//   let result = "";

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (word) {
//       result += word.charAt(0).toUpperCase() + word.slice(1);
//     }
//     if (i < words.length - 1) {
//       result += " ";
//     }
//   }

//   return result;
// };

// console.log(capitalizeFirstLetter("labas rytas pasauli"));

// const censorCurseWords = (text, curseWords) => {
//   let censoredText = text;
//   for (let i = 0; i < curseWords.length; i++) {
//     const curseWord = curseWords[i];
//     while (censoredText.includes(curseWord)) {
//       censoredText = censoredText.replace(curseWord, "****");
//     }
//   }
//   return censoredText;
// };

// console.log(
//   censorCurseWords('"This is a badword and another badword.", ["badword"]')
// );

// const milkPrice = 3.67;

// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia");
// } else {
//   alert("Centų prireiks...");
// }

// alert.apply(milkPrice.toFixed(2));

const findMax = (...numbers) => Math.max(...numbers);

console.log(findMax(1, 3, 8, 10));

// Pasirašykite kintamąjį isLegalAge, kurį priskirkite true arba false.

// Console.log'e atvaizduokite šį kintamąjį.

// Sukurkite antrą console.log, kuriame atvaizduokite šį kintamąjį su toString() metodu. Turėtų skirtis spalva teksto.

let isLegalAge = true;

console.log(isLegalAge);
console.log(isLegalAge.toString());
