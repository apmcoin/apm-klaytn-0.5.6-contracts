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

    struct Voucher{
        string voucherType; // event, digital, etc.,
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
        uint256 _amount,
        string calldata _uuid
    ) external {
        require(_vouchers[id].initialize , "Unknown voucher detail");
        require(_vouchers[id].expireAt < now, "Expired voucher");
        require(_vouchers[id].redeemAvailable, "Not Available");
        require(!isUuidBlacklist(_uuid), "Permission denied");

        _burn(msg.sender, id, _amount);

        emit RedeemVoucher(
            id,
            _amount,
            _uuid,
            _vouchers[id].voucherType,
            _vouchers[id].faceValue,
            _vouchers[id].currencyCode,
            _vouchers[id].expireAt,
            msg.sender
            );
    }

    function setVoucherDetail(
        uint256 id,
        string calldata _voucherType,
        uint256 _faceValue,
        string calldata _currencyCode,
        uint256 _expireAt,
        bool _redeemAvailable
    ) external onlyMinter {
        require(_exists(id), "Do token create first.");
        require(bytes(_currencyCode).length > 0, "Currency code required");
        require(_expireAt > now, "The expiration date is before the current time.");

        _vouchers[id] = Voucher({
                voucherType : _voucherType,
                faceValue : _faceValue,
                currencyCode : _currencyCode,
                expireAt : _expireAt,
                redeemAvailable : _redeemAvailable,
                initialize : true
            });

        emit SetVoucherDetail(
            id,
            _voucherType,
            _faceValue,
            _currencyCode,
            _expireAt,
            _redeemAvailable
            );
    }

    function setURI(string memory newuri) public onlyMinter {
        _setURI(newuri); //Default URI
    }

    function setCustomURI(uint256 id, string memory newuri) public onlyMinter {
        _uris[id] = newuri;
    }

    function mint(address to, uint256 id, uint256 value, bytes memory data) public {
        _mint(to, id, value, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory values, bytes memory data) public {
        _mintBatch(to, ids, values, data);
    }

    function burn(address owner, uint256 id, uint256 value) public {
        _burn(owner, id, value);
    }

    function burnBatch(address owner, uint256[] memory ids, uint256[] memory values) public {
        _burnBatch(owner, ids, values);
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