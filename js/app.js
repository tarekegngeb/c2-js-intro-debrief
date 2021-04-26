 let myNumber = 20;
if (typeof myNumber !== 'number') {
    console.log('This is not a number');
} else if (myNumber % 3 == 0 && myNumber % 5 == 0) {
    console.log('GenBuzz');
} else if (myNumber % 5 == 0) {
    console.log('Buzz');
} else if (myNumber % 3 == 0 ) {
    console.log('Gen');
} else {
    console.log(myNumber);
}

let price = 'shoes';
switch(price){
  case 'shoes':
  console.log('Shoes are $50');
  break;
  case 'Jeans':
  console.log('Jeans are $25');
  break;
  case 'Hat':
  console.log('Hat are $12');
        break;
    case 'Socks':
        console.log('Socks are $2');
  default:
    console.log('Invalid Item');
    break;
}

let min = 50;
let max = 100;
console.log(Math.floor(Math.random() * (max - min) + min));