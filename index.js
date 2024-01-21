// Task:Enhanced JavaScript Data Types, Operators and Object Practice

// Part 1

const scores = [1, 2, 3, 4, 5];

const [firstScore, secondScore] = scores;
console.log(firstScore, secondScore);

const student = {
  name: "Kate",
  age: 35,
  isEnrolled: true,
};

const { name: userName, age: userAge } = student;
console.log(userName, userAge);

// Part 2

console.log(typeof scores, typeof student);

console.log(scores.length);

// Part 3

console.log(firstScore + secondScore);
console.log(firstScore - secondScore);

console.log(firstScore > secondScore);
console.log(firstScore < secondScore);

console.log(firstScore > secondScore && student.age < secondScore);
console.log(firstScore > secondScore || student.age > firstScore);

console.log(student.isEnrolled != false);
