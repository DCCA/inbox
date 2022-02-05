// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const { keys } = require('./keys');

// Config the provider
const provider = new HDWalletProvider (
    keys.nmonic,
    'https://rinkeby.infura.io/v3/d97bd35ff0234cf4bc662cd9099a51bd'
);

// Start the provider
const web3 = new Web3(provider);

// Creating the deploy
const deploy = async () => {
    //get the accounts
    const accounts = await web3.eth.getAccounts();
    
    console.log('Attempting to deploy from account', accounts[0]);

    // get the data of the contract from the compiler
    // and try to deploy
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there!']})
        // config the transacion for the deploy
        .send({gas: '1000000', from: accounts[0]});

    // console log the address of where the contract was deployed
    console.log('Contract deployed to', result.options.address);

    // prevent hanging deployment
    provider.engine.stop();
};

deploy();