let array = [2, 3, 4, 5, 9, 7, 8];
let arrayResult = [];

function num() {
  for (let i = 0; i < array.length; i++) {
    if ((Math.sqrt(array[i]) % 1) == 0) {
      arrayResult.push (Math.sqrt(array[i]));
    } else {
      arrayResult.push(Math.pow(array[i], 2));
    }
  }

}
num();

console.log(arrayResult);