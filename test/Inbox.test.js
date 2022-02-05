// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
// Web3 constructor function
const Web3 = require('web3');
// Invoking a instance of web3 using the contructor
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile')


// set vars for tests
let accounts;
let inbox;

// set up for the tests
beforeEach(async ()=> {
    // get a list of all accounts
    // web3 is assync in nature, always return promises
    accounts = await web3.eth.getAccounts()
    // use one of those acconts to deploy
    // the contract
    // creating a instance of a Contract - async operacion
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there!']})
        .send({from: accounts[0], gas: '1000000'})

})

describe('Inbox', () => {
    // test the deploy
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });
    // test the message
    it('it has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });
    // change the message
    it('can change the message', async () => {
       await inbox.methods.setMessage('bye').send({from: accounts[0]});
       const message = await inbox.methods.message().call();
       assert.equal(message, 'bye');
    });

})

















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


