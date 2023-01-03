// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Box {
  uint public x;

  function setvalue(uint _nb) public{
      x=_nb;

  }

  function getValue() public view returns(uint){

    return x;
  }


  }
