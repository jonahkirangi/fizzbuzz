for (i = 1; i < 201; i++) {
  if ((i % 3) === 0 && (i % 5) === 0 && (i % 7) === 0) {
    console.log("FizzBuzzSivv");
  }
  else if ((i % 3) === 0 && (i % 5) === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}
