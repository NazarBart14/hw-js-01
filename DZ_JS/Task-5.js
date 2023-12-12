let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Enter a number:');

  if (input !== null) {
    const number = Number(input);

    if (!isNaN(number)) {
      numbers.push(number);
    } else {
      alert('Invalid input. Please try again.');
    }
  }
} while (input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }

  console.log(`The total sum of numbers is ${total}`);
}