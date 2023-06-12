const persons = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//First task
// ***MAP***

// 1. Get the array of all names

persons.map((element) => {
  console.log(element.name);
});

// 2. Get the array of all heights

persons.map((element) => console.log(element.height));

// 3. Get the array of objects with just name and height properties

persons.map((element) =>
  console.log(`${element.name} has ${element.height} sm`)
);

// 4. Get the array of all first names
const personsFirstNames = persons.map((item) => item.name);

const personsFirstNamesSplit = personsFirstNames.map((item) => item.split(" "));
const personsFirstNamelastStep = personsFirstNamesSplit.map(
  (element) => element[0]
);

console.log(personsFirstNames);
console.log(personsFirstNamesSplit);
console.log(personsFirstNamelastStep);

// Second task

// ***FILTER***

// 1. Get characters with a mass greater than 100

persons.filter((element) => {
  if (element.mass > 100) {
    console.log(`${element.name} has mass greater than 100`);
  }
});

// 2. Get characters with a height of less than 200

persons.filter((element) => {
  if (Number(element.height) < 200) {
    console.log(`${element.name} has height less than 200`);
  }
});

// 3. Get all male characters

const personsMale = persons.filter((element) => {
  if (element.gender === "male") {
    return true;
  }
});

console.log(personsMale);

// 4. Get all female characters

const personsFemale = persons.filter((element) => {
  if (element.gender === "female") {
    return true;
  }
});

console.log(personsFemale);

// Third task

// ***SORT***

// 1. Sort by mass

const personsSort = persons.sort((a, b) => {
  return a.mass - b.mass;
});

console.log(personsSort);

// 2. Sort by height

const personsHeight = persons.sort((a, b) => {
  return a.height - b.height;
});

console.log(personsHeight);

// 3. Sort by name

const personsName = persons.sort((a, b) => {
  if (a.name > b.name) return 1;
  return -1;
});

console.log(personsName);

// 4. Sort by gender

// const personsGender = persons.sort((a, b) => {
//     return a.gender > b.gender;
//   });

const personsGender = persons.sort((a, b) => a.gender > b.gender);

console.log(personsGender);

// Fourth task

// ***EVERY***

// 1. Does every character have blue eyes?

const personsEyeColor = persons.every((element) => {
  if (element.eye_color === "blue") {
    return true;
  }
});
console.log(personsEyeColor);

// 2. Does every character have a mass of more than 40?

const personsMass = persons.every((element) => {
  if (element.mass > 40) {
    return true;
  }
});
console.log(personsMass);

// 3. Is every character shorter than 200?

const getpersonsHeight = persons.every((element) => {
  if (element.height < 200) {
    return true;
  }
});
console.log(getpersonsHeight);

// 4. Is every character male?
const getpersonsGender = persons.every((element) => {
  if (element.gender === "male") {
    return true;
  }
});
console.log(getpersonsGender);

// Fifth task

// ***SOME***

// 1. Is there at least one male character?

const personsGenderCheck = persons.some((item) => {
  if (item.gender === "male") {
    return true;
  }
});
console.log(personsGenderCheck);

// 2. Is there at least one character with blue eyes?

const personsEyeColorCheck = persons.some((item) => {
  if (item.eye_color === "blue") {
    return true;
  }
});
console.log(personsEyeColorCheck);

// 3. Is there at least one character taller than 210?

const personsHeightCheck = persons.some((item) => {
  if (item.height > 210) {
    return true;
  }
});
console.log(personsHeightCheck);

// 4. Is there at least one character that has a mass of less than 50?

const personsMassCheck = persons.some((item) => {
  if (item.mass < 50) {
    return true;
  }
});
console.log(personsMassCheck);
