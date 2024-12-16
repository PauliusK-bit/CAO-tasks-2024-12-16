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

function alertName(text) {
  console.log(text);
}

function consoleName(secondText) {
  console.log(secondText);
}

function coreFunction(name, callback) {
  const capitalizedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  callback(capitalizedName);
}

coreFunction("pAulius", consoleName);

// const cars = ["BMW", "VW", "Audi"];

// cars.forEach((car) => {
//   console.log(car);
// });

const cars = ["BMW", "VW", "Audi"];

cars.forEach((car, index) => console.log(index + ":" + car));

let friends = ["petras", "jonas", "paulius", "aNtanas"];

let newNames = friends.map(
  (friendNames) =>
    friendNames.charAt(0).toUpperCase() + friendNames.slice(1).toLowerCase()
);
console.log(newNames);

// Sukurkite array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter – išveskite tik tuos skaičius, kurie yra didesni arba lygūs 18.

let friendsAge = [12, 18, 24, 65, 42, 11, 78];

let filterAge = friendsAge.filter((x) => x >= 18);

console.log(filterAge);

let cities = ["Vilnius", "Kaunas", "Palanga", "Klaipėda"];

console.log(cities.find((letter) => letter.charAt(0) === "K"));

console.log(cities.some((v) => v.charAt(0) === v.charAt(0).toLowerCase()));

console.log(cities.every((v) => v.charAt(0) === v.charAt(0).toUpperCase()));
