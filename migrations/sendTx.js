const Web3 = require('web3');
const Box = require('../build/contracts/Box.json');
// const address = '0x9D83417625c8FaF049d1bC13FDa85261203b6173';
// const privateKey = 'af15c58a190510f99748e9be3272a6b4785c77a74af9b7942f6a32e0652fee41';

const RinkebyUrl = 'https://eth-rinkeby.alchemyapi.io/v2/dwXvcyEtTkO8IE04pjldJYz7O23nZJTc'; 

//Hard way (web3#signTransaction() + web3#sendSignedTransaction())

const init = async () => {
  const web3 = new Web3(RinkebyUrl);          
  const CONTRACT_ADDRESS = "0x9D83417625c8FaF049d1bC13FDa85261203b6173";
    const CONTRACT_ABI = [Box];
    const addresses= web3.eth.getAccounts();
    await contract.methods.setvalue(10).send({
      from: addresses[0],
    });
   const data = await contract.methods.getValue().call();
  console.log("Old data ", data);
  //const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
 // console.log(`Transaction hash: ${receipt.transactionHash}`);
 // console.log(`New data value: ${await myContract.methods.x().call()}`);
}
init();