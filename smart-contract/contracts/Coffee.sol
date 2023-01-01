// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Coffee {
    struct Memo {
        string name;
        string message;
        uint256 timestamp;
        address from;
    }

    address payable owner;
    Memo[] memos;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyCoffee(string memory name, string memory message)
        public
        payable
    {
        require(msg.value > 0, "Send More than 0 Eth");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns(Memo[] memory){
        return memos;
    }
}
