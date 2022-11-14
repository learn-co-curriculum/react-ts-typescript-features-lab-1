// Problem 1: Fix "num"'s value to match its type declaration
let num: number;
num = "12";

// Problem 2: Fix the object type declaration to include the missing property
let dog: {
  name: string;
  breed: string;
  canBeAdopted: boolean;
};

dog = {
  name: "Cookie",
  age: 5,
  breed: "Golden Retriever",
  canBeAdopted: true,
};

// Problem 3: Fix the array type declaration to match its contents
let favoriteQuotes: string[];
favoriteQuotes = [
  { quote: "I don't have friends. I got family", source: "Furious 7" },
  { quote: "Ogres are like onions", source: "Shrek" },
  { quote: "I am Groot", source: "Guardians of the Galaxy" },
];

// Problem 4: Create a type interface or alias to avoid the repetitive type declarations of the following objects
const fruitOne: {
  name: string;
  color: string;
  available: number;
} = {
  name: "apple",
  color: "red",
  available: 125,
};

const fruitTwo: {
  name: string;
  color: string;
  available: number;
} = {
  name: "orange",
  color: "orange",
  available: 59,
};

const fruitThree: {
  name: string;
  color: string;
  available: number;
} = {
  name: "banana",
  color: "yellow",
  available: 3,
};
