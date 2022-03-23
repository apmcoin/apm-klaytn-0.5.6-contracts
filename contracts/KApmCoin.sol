pragma solidity ^0.5.6;

import "./interfaces/IKApmCoin.sol";
import "./klaytn-contracts/ownership/Ownable.sol";
import "./klaytn-contracts/token/KIP7/KIP7Token.sol";

contract KApmCoin is Ownable, KIP7Token, IKApmCoin {
    constructor() public KIP7Token("apM Coin", "APM", 18, 0) {
        // solhint-disable-previous-line no-empty-blocks
    }

    mapping(address => bool) private _isBlacklist;
    address public blacklistManager;

    function setBlacklistManager(address _manager) external {
        require(msg.sender == blacklistManager || isOwner(), "Permission denied");
        blacklistManager = _manager;
        emit SetBlacklistManager(_manager);
    }

    modifier onlyBlacklistManager() {
        require(msg.sender == blacklistManager, "Permission denied");
        _;
    }

    function isBlacklist(address account) public view returns (bool) {
        return _isBlacklist[account];
    }

    function registerBlacklist(address account) public onlyBlacklistManager {
        _isBlacklist[account] = true;
        emit RegisterBlacklist(account);
    }

    function unregisterBlacklist(address account) public onlyBlacklistManager {
        _isBlacklist[account] = false;
        emit UnregisterBlacklist(account);
    }

    function _transfer(address sender, address recipient, uint256 amount) internal {
        require(!_isBlacklist[sender] && !_isBlacklist[recipient], "Permission denied");
        return super._transfer(sender, recipient, amount);
    }

    function _mint(address account, uint256 amount) internal {
        require(!_isBlacklist[account], "Permission denied");
        return super._mint(account, amount);
    }

    function removeMinter(address account) public onlyOwner {
        _removeMinter(account);
    }

    function claimTokens(address _token) public onlyOwner {
        IKIP7 token = IKIP7(_token);
        uint256 claimedBalance = token.balanceOf(address(this));

        token.transfer(msg.sender, claimedBalance);
        emit ClaimedTokens(msg.sender, _token, claimedBalance);
    }
}