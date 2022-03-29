function printEven() {
  document.querySelector("#printEven").innerHTML = "";
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      document.querySelector("#printEven").innerHTML =
        document.querySelector("#printEven").innerHTML + " " + i;
    }
  }
}

function printOdd() {
  document.querySelector("#printOdd").innerHTML = "";
  for (let i = 20; i <= 50; i++) {
    if (i % 2 !== 0) {
      document.querySelector("#printOdd").innerHTML =
        document.querySelector("#printOdd").innerHTML + " " + i;
    }
  }
}

function printDivisibleBy5() {
  document.querySelector("#printDivisibleBy5").innerHTML = "";
  let x = [12, 45, 67, 89, 90, 34, 35, 55];
  for (let i = 0; i <= 7; i++) {
    if (x[i] % 5 === 0) {
      document.querySelector("#printDivisibleBy5").innerHTML =
        document.querySelector("#printDivisibleBy5").innerHTML + " " + x[i];
    }
  }
}
function printArray() {
  document.querySelector("#printArray").innerHTML = "";
  let x = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ];
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 1; j++) {
      document.querySelector("#printArray").innerHTML =
        document.querySelector("#printArray").innerHTML + " " + x[i][j];
    }
  }
}

function printPrime() {
  document.querySelector("#printPrime").innerHTML = "";
  for (let i = 2; i <= 50; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      isPrime = true;
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      document.querySelector("#printPrime").innerHTML =
        document.querySelector("#printPrime").innerHTML + " " + i;
    }
  }
}
