
// use never to check exhaustive in switch

enum Color {
  Red,
  Green,
  Blue
}

function getColorName(c: Color): string {
  switch (c) {
    case Color.Red:
      return 'red';
    case Color.Green:
      return 'green';
      // Forgot about Blue
  }

  throw new Error('Did not expect to be here');
}

function assertUnreachable(x: never): never {
  throw new Error('Should not reach here');
}
function getColorName2(c: Color): string {
  switch (c) {
    case Color.Red:
      return 'red';
    case Color.Green:
      return 'green';
      // Forgot about Blue
  }
  return assertUnreachable(c);
}


// Discriminated union using string literals
interface Dog {
  species: 'canine';
  woof: string;
}
interface Cat {
  species: 'feline';
  meow: string;
}
interface Fish {
  species: 'pisces';
  meow: string;
}
type Pet = Dog|Cat|Fish;

// Externally-visible signature
function throwBadPet(p: never): never;
// Implementation signature
function throwBadPet(p: Pet) {
  throw new Error('Unknown pet kind: ' + p.species);
}

function meetPet(p: Pet) {
  switch (p.species) {
    case 'canine':
      console.log('Who\'s a good boy? ' + p.woof);
      break;
    case 'feline':
      console.log('Pretty kitty: ' + p.meow);
      break;
    // case 'pisces':
    //   console.log('Baby shark: ' + p.meow);
    //   break;
    default:
      // Argument of type 'Fish' not assignable to 'never'
      throwBadPet(p);
  }
}

// Hybrid Types
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = (function(start: number) {}) as Counter;
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;