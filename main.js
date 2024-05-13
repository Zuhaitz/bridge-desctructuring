// Destructuring
// Exercise 1
console.log("------------- Exercise 1 -------------");

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

let [luis, ana, andrea] = empleados;
console.log(ana);

let { name, email } = luis;
console.log(email);

// Exercise 2
console.log("------------- Exercise 2 -------------");

const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    defense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

let {
  name: nombre,
  type,
  moves: [, move2],
} = pokemon;

console.log(nombre, type, move2);

// Spread/Rest
// Exercise 3
console.log("------------- Exercise 3 -------------");

const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};

let fusion = { ...pokemon, ...pikachu };
console.log(fusion);

// Exercise 4
console.log("------------- Exercise 4 -------------");

function sumEveryOther(...nums) {
  return nums.reduce((total, n) => (total += n));
}

console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26

// Exercise 5
console.log("------------- Exercise 5 -------------");

function addOnlyNums(...elems) {
  return elems.reduce((total, elem) =>
    typeof elem === "number" ? (total += elem) : total
  );
}

console.log(addOnlyNums(1, "perro", 2, 4)); //7

// Exercise 6
console.log("------------- Exercise 6 -------------");

function countTheArgs(...elems) {
  return elems.length;
}

console.log(countTheArgs("gato", "perro")); //2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4

// Exercise 7
console.log("------------- Exercise 7 -------------");

function combineTwoArrays(array1, array2) {
  return [...array1, ...array2];
}

console.log(combineTwoArrays([1, 2, 3], [4, 5, 6]));

// EXTRAS
// Extra 1
console.log("------------- Extra 1 -------------");

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);

// Extra 2
console.log("------------- Extra 2 -------------");

function onlyUniques(...elems) {
  return elems.filter((v, i) => elems.indexOf(v) === i);
}

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); //['gato', 'pollo', 'cerdo']
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]

// Extra 3
console.log("------------- Extra 3 -------------");

function combineAllArrays(...arrays) {
  return Array.prototype.concat(...arrays);
}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]
console.log(
  combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])
); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

// Extra 4
console.log("------------- Extra 4 -------------");

function sumAndSquare(...nums) {
  return nums.reduce((total, v) => (total += v ** 2), 0);
}

console.log(sumAndSquare(2, 3)); // 13
console.log(sumAndSquare(2, 3, 4)); // 29
