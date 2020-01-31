const helloWorld = (world: string) => {
  console.log(`Hello ${world}`);
};

// // Strong types
// const anchor = document.createElement('a');
// let url = anchor.href;

// const div = document.createElement('div');
// const url = div.href;

// Basic types
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.`;

// // Declare a tuple type
// let x: [string, number];
// // Initialize it
// x = ["hello", 10]; // OK
// // Initialize it incorrectly
// x = [10, "hello"]; // Error

// // Enums
// enum Color {
//   red = 1,
//   blue,
//   green,
// }

// console.log(Color.red === 1, Color.blue === 2);


// // Any
// let a: any;
// a = 2020;
// a = 'Jan';
// a = 31;

// let b = [];
// b.push('abc');
// b.push(28);

// let c: string[] = [];
// c.push('22', 12);


// // Null and Undefined
// let u: undefined = undefined;
// let n: null = null;


// // void !== undefined
// let func1 = () => {};
// let func2: () => undefined = () => {
//   console.log('func2');
// };
// u = func1();
// u = func2();

// // Never
// // Function returning never must have unreachable end point
// function error(message: string): never {
//   throw new Error(message);
// }


// // Type assertion
// let someValue: any = 'this is a string';

// let strLength1: number = (<string>someValue).length;
// let strLength2: number = (someValue as string).length;


// // interfaces
// interface Contact {
//   name: string;
//   email: string;
// }

// const users: Contact[] = [];
// users.push({name: 'Lee', email: 'xbe@fmeil'});
// users.push({name: 'Young'});


// // Optional Properties
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): {color: string; area: number} {
//   let newSquare = {color: 'white', area: 100};
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({color: 'black'});


// // Readonly properties
// interface Point {
//   readonly x: number;
//   readonly y: number;
// }

// let p1: Point = {x: 10, y: 20};
// p1.x = 5;  // error!

// // ReadonlyArray<T>
// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// Function Types
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch =
    function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

// // class
// class Point {
//   private readonly x: number;
//   private readonly y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }

// class PointX {
//   constructor(private readonly x: number, private readonly y: number) {}
//   getX() {
//     return this.x;
//   }
//   getY() {
//     return this.y;
//   }
// }

// const p = new PointX(1, 2);
// console.log(p.getX(), p.getY());


// // Difference between the static and instance sides of classes
// interface ClockConstructor {
//   new(hour: number, minute: number);
// }

// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) {}
// }

// interface ClockConstructor {
//   new(hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//   tick(): void;
// }

// function createClock(
//     ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//   return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number) {}
//   tick() {
//     console.log('beep beep');
//   }
// }
// class AnalogClock implements ClockInterface {
//   constructor(h: number, m: number) {}
//   tick() {
//     console.log('tick tock');
//   }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

// interface ClockConstructor {
//   new(hour: number, minute: number): ClockInterface;
// }

// interface ClockInterface {
//   tick: () => void;
// }

// const Clock: ClockConstructor = class Clock implements ClockInterface {
//   constructor(h: number, m: number) {}
//   tick() {
//     console.log('beep beep');
//   }
// }

// const c = new Clock(1, 2);
// c.tick();

// // keyof
// interface Car {
//   manufacturer: string;
//   model: string;
//   year: number;
// }
// let taxi: Car = {manufacturer: 'Toyota', model: 'Camry', year: 2014};
// let carProps: keyof Car;
// carProps = 'manufacturer';
// // carProps = 'somethingElse';

// function printCarQuestion(carProps: keyof Car) {
//   console.log(carProps);
// }

// printCarQuestion('not a car');

export default helloWorld;
