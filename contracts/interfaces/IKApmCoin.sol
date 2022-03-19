pragma solidity ^0.5.6;

import "../klaytn-contracts/token/KIP7/IKIP7.sol";

contract IKApmCoin is IKIP7 {
    event SetBlacklistManager(address indexed account);
    event RegisterBlacklist(address indexed account);
    event UnregisterBlacklist(address indexed account);
    event ClaimedTokens(address indexed owner, address indexed _token, uint256 claimedBalance);

    function isBlacklist(address account) public view returns (bool);
}