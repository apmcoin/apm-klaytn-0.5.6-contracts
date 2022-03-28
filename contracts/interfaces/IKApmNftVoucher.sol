pragma solidity ^0.5.6;

import "../klaytn-contracts/token/KIP37/IKIP37MetadataURI.sol";
import "../klaytn-contracts/token/KIP37/IKIP37Receiver.sol";

contract IKApmNftVoucher is IKIP37 {
    event SetBlacklistManager(address indexed account);
    event RegisterBlacklist(address indexed account);
    event UnregisterBlacklist(address indexed account);
    event RegisterUuidBlacklist(string indexed uuid);
    event UnregisterUuidBlacklist(string indexed uuid);
    event SetVoucherDetail(
        uint256 indexed id,
        string name,
        string description,
        string indexed voucherType,
        uint256 indexed voucherFormatId,
        uint256 faceValue,
        string currencyCode,
        uint256 expireAt,
        bool redeemAvailable
        );
    event RedeemVoucher(
        uint256 indexed redeemId,
        uint256 indexed tokenId,
        uint256 amount,
        string indexed userUuid,
        string voucherType,
        uint256 voucherFormatId,
        uint256 faceValue,
        string currencyCode,
        uint256 expireAt,
        address sender
        );

    //Transfer voucher to off-chain service using uuid
    function redeemVoucher(
        uint256 id,
        uint256 amount,
        string calldata userUuid
    ) external;

    function setVoucherDetail(
        uint256 id,
        string calldata title,
        string calldata description,
        string calldata voucherType,
        uint256 voucherFormatId,
        uint256 faceValue,
        string calldata currencyCode,
        uint256 expireAt,
        bool redeemAvailable
    ) external;
    function isBlacklist(address account) public view returns (bool);
    function isUuidBlacklist(string memory uuid) public view returns (bool);
}