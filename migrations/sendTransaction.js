const Web3 = require('web3');
(async()=>{
    const web3 = new Web3(
        "https://rinkeby.infura.io/v3/4d3cd82c4dfe40db899c8d709703ab12"
    );


    const CONTRACT_ADDRESS = "0x9D83417625c8FaF049d1bC13FDa85261203b6173";
    const CONTRACT_ABI =  
[];
        
   



const nftContract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
 await nftContract.methods.setvalue(10).send({from:"0xDf02E5536d56C305ca03D98535d53Fa25FCc2f9B"});
console.log("success");
})();