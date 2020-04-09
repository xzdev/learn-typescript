
// 1. Use Generics

// example 1
class AnyStorage<T> {
  private storage: Map<string, T> = new Map<string, T>();
  public saveToDataStore(key: string, value: T): void {
    this.storage.set(key, value);
  };
  public getFromDataStoer(key: string): T | undefined {
    return this.storage.get(key);
  }
}

// example 2
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}

// example 3
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error:

// 2. Use union type

// example 1
function padLeftBad(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

function padLeftGood(value: string, padding: string | number) {
  // ...
}

let indentedString = padLeftGood("Hello world", true); // errors during compilation

// example 2

type ExampleResponse = {
  loading: boolean;
  error: boolean;
  payload?: object;
};

// { loading: true, error: false } → 'LOADING'
// { loading: false, error: false } → 'SUCCESS'
// { loading: false, error: true } → 'ERROR'
// { loading: true, error: true } → should never happen!

type SuccessfulResponse = {
  status: 'SUCCESS';
  payload: object;
}

type ResponseInProgress = {
  status: 'LOADING';
};

type ErrorResponse = {
  status: 'ERROR';
};

type SomeResponse = ResponseInProgress | SuccessfulResponse | ErrorResponse;

// 3. Enum and string literals
type Coin = 'quarter' | 'dime' | 'nickle' | 'penny';
enum CoinEnum {
  Quarter = 'quarter',
  Dime = 'dime',
  Nickle = 'nickle',
  Penny = 'penny',
}


// 4. Strict null & undefined check

// Compiled with --strictNullChecks
let x: number;
let y: number | null;
let z: number | undefined;
x;  // Error, reference not preceded by assignment
y;  // Error, reference not preceded by assignment
z;  // Ok
x = 1;
y = null;
x;  // Ok
y;  // Ok

// 5. Use type alias
type UserId = string;
type OrgName = string;

// 6. Use predicate

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(): Fish | Bird {
  // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
}
else {
  pet.fly();
}

// 7. use never to check exhaustive in switch

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
