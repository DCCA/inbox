// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const { keys } = require('./keys');

const provider = new HDWalletProvider (
    keys.nmonic,
    'https://rinkeby.infura.io/v3/d97bd35ff0234cf4bc662cd9099a51bd'
);

const web3 = new Web3(provider);