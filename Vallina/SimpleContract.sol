//SPDX-License-Identifier: MIT
pragma solidity >=0.8.13 <0.8.21;

contract HelloWorld {
    uint256 a;
    uint256 b;

    function setValues(uint256 val1, uint256 val2) public {
        a = val1;
        b = val2;
    }

    function sum() public view returns (uint256) {
        return (a + b);
    }

    function geta() public view returns (uint256) {
        return a;
    }

    function getb() public view returns (uint256) {
        return b;
    }
}
