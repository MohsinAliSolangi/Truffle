/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation, and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 * 
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = "af15c58a190510f99748e9be3272a6b4785c77a74af9b7942f6a32e0652fee41";
module.exports = {
  networks: {
    rinkeby: {
      host: "127.0.0.1",
      port: 8545,
      network_id:"*"
    },
  
    rinkeby: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/v3/4d3cd82c4dfe40db899c8d709703ab12`),
      network_id: 4,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
       // Skip dry run before migrations? (default: false for public nets )
     },   
    }
};

  