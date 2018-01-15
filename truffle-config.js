// Allows us to use ES6 in our migrations and tests.
require('babel-register')
let HDWalletProvider = require("truffle-hdwallet-provider");

// https://faucet.metamask.io/ - Top up your metamask wallet

/**
 * You will require a mnemomic and an Infura API Key of your own for this configuration.
 * For testing Ropsten seems to be working most of the time.
 */

let mnemonic = "<your seed words>";
let infuraAPIKey = "<your-infura-api-key>";

module.exports = {
  networks: {
    // Main - Production : WARNING this will use real Ether and cost you money to deploy contracts.
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/" + infuraAPIKey)
      },
      network_id: 3,
      gas: 4600000
    },
    // Rinkeby - Production : WARNING this will use real Ether and cost you money to deploy contracts.
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/" + infuraAPIKey)
      },
      network_id: 3,
      gas: 4600000
    },
    // Kovan
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/" + infuraAPIKey)
      },
      network_id: 3,
      gas: 4600000
    },
    // Ropsten
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infuraAPIKey)
      },
      network_id: 3,
      gas: 4600000
    }
  }
};
