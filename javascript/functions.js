// function hello() {
//   console.log("hello");
// }

// hello();

// function hello2(name = "user") {
//   console.log("hello ", name);
// }

// hello2("amit mali");
// hello2("rahul");
// hello2();

// function isPrime(num) {
//   let isPrime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   return isPrime;
// }

// console.log(isPrime(9));

// function a() {
//   let x = "a";
//   console.log(x);
//   function b() {
//     let y = "b";
//     console.log(x, y);
//     function c() {
//       let z = "c";
//       console.log(x, y, z);
//     }
//     c();
//   }
//   b();
// }

// a();

// arrow functions

const hello = () => {
  console.log("hello");
};
hello();

const hello2 = (val = "user") => console.log(val);
hello2("amit");

const hello3 = (username) => console.log(username);
