// 1

// with iterator: 

// const range = {
//     from: 1,
//     to: 100
// }
// range[Symbol.iterator] = function() {
//     let current = this.from; 
//     let last = this.to;

//     return {
//         next() {
//             if (current > last) {
//                 return {
//                     done: true
//                 }
//             } else if (current % 15 === 0) {
//                 current++
//                 return {
//                     value: "FizzBuzz",
//                     done: false
//                 }
//             } else if (current % 5 === 0) {
//                 current++
//                 return {
//                     value: "Buzz",
//                     done: false
//                 }
//             } else if (current % 3 === 0) {
//                 current++
//                 return {
//                     value: "Fizz",
//                     done: false
//                 }
//             } else {
//                 return {
//                     value: current++,
//                     done: false
//                 } 
//             } 
//         }
//     }
// }

// for (let num of range) {
//     console.log(num)
// }

// with generator: 

// const range2 = {
//     from: 1,
//     to: 100,

//     *[Symbol.iterator]() { 
//         for (let value = this.from; value <= this.to; value++) {
//            if (value % 15 === 0) {
//                 yield "FizzBuzz"
//             } else if (value % 5 === 0) {
//                 yield "Buzz"
//             } else if (value % 3 === 0) {
//                 yield "Fizz";
//             } else {
//                 yield value;
//             } 
//         }
//     }
// }

// for (let num of [...range2]) {
//     console.log(num)
// }


// 2

function* generateRandomNumbers(max, quantity) {
    for (let i = 0; i < quantity; i++) {
        yield ~~(Math.random() * max);
    }
}

const randomArr = [...generateRandomNumbers(40, 20)];

console.log(randomArr);
