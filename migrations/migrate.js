const Box = artifacts.require("Box");



module.exports = function (deployer) {
  
  deployer.deploy("box here",Box);
 
  console.log("deploy here",Box);

};

//0x9D83417625c8FaF049d1bC13FDa85261203b6173