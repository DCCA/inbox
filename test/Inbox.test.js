// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
// Web3 constructor function
const Web3 = require('web3');
// Invoking a instance of web3 using the contructor
const web3 = new Web3(ganache.provider());
