function numberTest(num) {
  return number%2 == 0 ? 'E' : 'O';
}

let number = 11;

switch (numberTest(number)) {
  case 'E':
    console.log('Even number');
    break;
  default:
    console.log('Odd number');
    break;
}