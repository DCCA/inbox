// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
// Web3 constructor function
const Web3 = require('web3');
// Invoking a instance of web3 using the contructor
const web3 = new Web3(ganache.provider());

// Testing with Mocha
// // Starting with Mocha
// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vrumm'
//     }
// }

// // Declare var to tests
// let car;
// // 
// beforeEach(()=> {
//     car = new Car();
// })

// // Defining a test
// describe('Car', () => {
//     it('can park', () => {
//         // test case
//         assert.equal(car.park(), 'stopped')
//     })
//     it('can drive', () => {
//         assert.equal(car.drive(), 'vrumm')
//     })
// });