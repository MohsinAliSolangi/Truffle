const Web3 = require('web3');
const Box = require('../build/contracts/Box.json');

(async()=>{
    const web3 = new Web3(
        "https://eth-rinkeby.alchemyapi.io/v2/dwXvcyEtTkO8IE04pjldJYz7O23nZJTc"
    );


    const CONTRACT_ADDRESS = "0x9D83417625c8FaF049d1bC13FDa85261203b6173";
    const CONTRACT_ABI =  [Box];
        
       
        
   



const nftContract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
const onlyTransfer = await nftContract.methods.getValue().call({from: "0x9D83417625c8FaF049d1bC13FDa85261203b6173"})



console.log("onlyTransfer",onlyTransfer);


})();