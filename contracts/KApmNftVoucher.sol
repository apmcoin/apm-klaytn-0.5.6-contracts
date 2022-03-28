pragma solidity 0.5.6;

import "./interfaces/IKApmNftVoucher.sol";
import "./utils/Strings.sol";
import "./klaytn-contracts/token/KIP37/KIP37.sol";
import "./klaytn-contracts/token/KIP37/KIP37Burnable.sol";
import "./klaytn-contracts/token/KIP37/KIP37Pausable.sol";
import "./klaytn-contracts/token/KIP37/KIP37Mintable.sol";
import "./klaytn-contracts/ownership/Ownable.sol";
import "./klaytn-contracts/math/SafeMath.sol";

contract KApmNftVoucher is Ownable, KIP37, KIP37Burnable, KIP37Pausable, KIP37Mintable, IKApmNftVoucher{
    using SafeMath for uint256;
    constructor (string memory uri) public KIP37(uri) {
        // solhint-disable-previous-line no-empty-blocks
    }

    //On-chain metadata stauct
    struct Voucher{
        string name;
        string description;
        string voucherType; // for metadata image. event, digital, etc.,
        uint256 voucherFormatId;
        uint256 faceValue; // 10000
        string currencyCode; // KRW
        uint256 expireAt; // utc+0 timestamp
        bool redeemAvailable;
        bool initialize;
    }

    mapping(uint256 => Voucher) public _vouchers;
    mapping(string => bool) private _isUuidBlacklist;
    mapping(address => bool) private _isBlacklist;
    address public blacklistManager;

    function redeemVoucher(
        uint256 id,
        uint256 amount, //EA, not the sum of faceValue
        string calldata userUuid
    ) external {
        require(_vouchers[id].initialize, "Unknown voucher detail");
        require(_vouchers[id].expireAt < now, "Expired voucher");
        require(_vouchers[id].redeemAvailable, "Not Available");
        require(!isUuidBlacklist(userUuid), "Permission denied");

        _burn(msg.sender, id, amount);

        emit RedeemVoucher(
            id,
            amount,
            userUuid,
            _vouchers[id].voucherType,
            _vouchers[id].voucherFormatId,
            _vouchers[id].faceValue,
            _vouchers[id].currencyCode,
            _vouchers[id].expireAt,
            msg.sender
            );
    }

    function setVoucherDetail(
        uint256 id,
        string calldata name,
        string calldata description,
        string calldata voucherType,
        uint256 voucherFormatId,
        uint256 faceValue,
        string calldata currencyCode,
        uint256 expireAt,
        bool redeemAvailable
    ) external onlyMinter {
        require(_exists(id), "Do token create first.");
        require(bytes(currencyCode).length > 0, "Currency code required");
        require(expireAt > now, "The expiration date is before the current time.");

        _vouchers[id] = Voucher({
                name : name,
                description : description,
                voucherType : voucherType,
                voucherFormatId : voucherFormatId,
                faceValue : faceValue,
                currencyCode : currencyCode,
                expireAt : expireAt,
                redeemAvailable : redeemAvailable,
                initialize : true
            });
        
        emit SetVoucherDetail(
            id,
            name,
            description,
            voucherType,
            voucherFormatId,
            faceValue,
            currencyCode,
            expireAt,
            redeemAvailable
            );
    }

    function removeMinter(address account) public onlyOwner {
        _removeMinter(account);
    }

    function setURI(string memory newuri) public onlyMinter {
        _setURI(newuri); //Default URI
    }

    function setCustomURI(uint256 id, string memory newuri) public onlyMinter {
        _uris[id] = newuri;
    }

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

    function isUuidBlacklist(string memory uuid) public view returns (bool) {
        return _isUuidBlacklist[uuid];
    }

    function registerUuidBlacklist(string memory uuid) public onlyBlacklistManager {
        _isUuidBlacklist[uuid] = true;
        emit RegisterUuidBlacklist(uuid);
    }

    function unregisterUuidBlacklist(string memory uuid) public onlyBlacklistManager {
        _isUuidBlacklist[uuid] = false;
        emit UnregisterUuidBlacklist(uuid);
    }

}