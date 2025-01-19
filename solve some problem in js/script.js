// 1. Create a function that calculates the sum of two given numbers.
// Input: 3, 5
// Output: 8

function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(3, 5));
// 2. Write a function that checks if a number is prime (a number that can only
// be divided by 1 and itself without any remainder).
// Input: 7

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(5));
console.log(isPrime(1));
console.log(isPrime(8));
// Output: true
// 3. Write a function to reverse a given string (using built in method).
// Input: "hello"
// Output: “olleh"

function reverseString(str) {
  //   let reversed = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversed += str[i];
  //   }
  //   return reversed;
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
// 4. Write a function to find the largest number in an arra
// Input: [1, 3, 7, 2, 4]
// Output: 7

function findLargestNumber(arr) {
  //   let largest = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] > largest) {
  //       largest = arr[i];
  //     }
  //   }
  //   return largest;
  return Math.max(...arr);
}

console.log(findLargestNumber([1, 3, 7, 2, 4]));

// 5. Write a function that filters an array and returns only the even number
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function filterEvenNumbers(arr) {
  //   let evenNumbers = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       evenNumbers.push(arr[i]);
  //     }
  //   }
  //   return evenNumbers;
  return arr.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// 6. Implement a function to reverse a string without using the built-in reverse()
// method.
// Input: "route"
// Output: “etuor"

function reverseStr(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseStr("route"));
// 7. Write a function to calculate the average value of all numbers in an array.
// Input: [1, 2, 3, 4, 5]
// Output: 3

function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));
// 8. Write a function that determines whether a given day number (1-7)
// represents a weekday or weekend.
// Input: 5
// Output: "Weekday"
// Input: 7
// Output: “Weekend"

function determineDay(dayNum) {
  if (dayNum >= 1 && dayNum <= 6) {
    return "Weekday";
  } else if (dayNum === 7) {
    return "Weekend";
  } else {
    return "Invalid day number";
  }
}
console.log(determineDay(5));
console.log(determineDay(7));
// 9. Write a function that filters an array of numbers and returns only those tha
// are divisible by 2 or 3.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: [2, 3, 4, 6, 8, 9]

function filterNumbers(arr) {
  //   const fliteredArray = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0 || arr[i] % 3 === 0) {
  //       fliteredArray.push(arr[i]);
  //     }
  //   }
  //   return fliteredArray;
  return arr.filter((num) => num % 2 === 0 || num % 3 === 0);
}
console.log(filterNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 10. Write a function that finds the index of a given element in an array. If th
// element isn’t found, return `-1`.
// Input: [1, 2, 3, 4, 5], 3
// Output: 2
// Input: [1, 2, 3, 4, 5], 10
// Output: -1

function findIndex(arr, element) {
  //   for (var i = 0; i < arr.length; i++) {
  //     if (arr[i] === element) {
  //       return i;
  //     }
  //   }
  //   return -1;
  return arr.indexOf(element);
}

console.log(findIndex([1, 2, 3, 4, 5], 3));

console.log(findIndex([1, 2, 3, 4, 5], 10));
// 11. Write a function to calculate the factorial of a given number.
// Input: 5
// Output: 120

function factorial(num) {
  //   let result = 1;
  //   for (var i = 2; i <= num; i++) {
  //     result *= i;
  //   }
  //   return result;
  return num === 0 ? 1 : num * factorial(num - 1);
}
console.log(factorial(5));
// 12. Write a function that takes an object and returns an array containing only
// its keys.
// Input: {name: "John", age: 30}
// Output: ["name", “age"]

function getKeys(obj) {
  //   const keys = [];
  //   for (var key in obj) {
  //     keys.push(key);
  //   }
  //   return keys;
  return Object.keys(obj);
}
console.log(getKeys({ name: "John", age: 30 }));
// 13. Write a function that returns only the unique numbers from an array.
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 3, 5]

function getUniqueNumbers(arr) {
  const uniqueNumbers = [];
  const reduceObj = arr.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});
  console.log(reduceObj);
  for (const key in reduceObj) {
    if (reduceObj[key] === 1) {
      uniqueNumbers.push(parseInt(key));
    }
  }
  return uniqueNumbers;
}

console.log(getUniqueNumbers([1, 2, 2, 3, 4, 4, 5]));
// 14. Write a function to count the occurrences of each character in a string.
// Input: "hello"
// Output: {h: 1, e: 1, l: 2, o: 1}

function countCharacters(str) {
  const charCount = str.split("").reduce((acc, character) => {
    acc[character] = (acc[character] || 0) + 1;
    return acc;
  }, {});
  return charCount;
}

console.log(countCharacters("hello"));
// 15. Write a function that sorts an array of numbers in ascending order.
// Input: [5, 3, 8, 1, 2]
// Output: [1, 2, 3, 5, 8]

function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortNumbers([5, 3, 8, 1, 2]));
// 16. Write a function to check if a given string is an anagram of another string
// (i.e., contains the same characters in a different order).
// Input: "listen", "silent"
// Output: true

function isAnagram(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
console.log(isAnagram("listen", "silent"));
// 17. Write a function that creates a car object with properties such as `model`
// and `year’ and includes a method to display the car's details.
// Input: Toyota, 2020
// Output: "Model: Toyota, Year: 2020"

function makeCar(model, year) {
  const car = {
    model,
    year,
    displayDetails() {
      return `Model: ${this.model}, Year: ${this.year}`;
    },
  };
  return car.displayDetails();
}
console.log(makeCar("Toyota", 2020));
// 19. Write a function that checks if a given object contains a specific propert
// Input: {name: "Alice", age: 25}, "name"
// Output: true
// Input: {name: "Alice", age: 25}, "address"
// Output: false

function hasProperty(obj, property) {
  return property in obj;
}

console.log(hasProperty({ name: "Alice", age: 25 }, "name"));
console.log(hasProperty({ name: "Alice", age: 25 }, "address"));
// 20. Write a function that performs a mathematical operation (`+`, `-`, `*`, `/`)
// on two numbers.
// Input: 5, 3, "+"
// Output: 8
// Input: 5, 3, "%"
// Output: "Invalid operator"

function chooseCalcMethod(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

console.log(chooseCalcMethod(5, 3, "+"));

console.log(chooseCalcMethod(5, 3, "%"));
